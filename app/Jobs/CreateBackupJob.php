<?php

namespace App\Jobs;

use App\Models\FileDisk;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Spatie\Backup\Config\Config;
use Spatie\Backup\Tasks\Backup\BackupJobFactory;

class CreateBackupJob implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    protected $data;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($data = '')
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $fileDisk = FileDisk::find($this->data['file_disk_id']);
        $fileDisk->setConfig();

        $prefix = env('DYNAMIC_DISK_PREFIX', 'temp_');

        config(['backup.backup.destination.disks' => [$prefix.$fileDisk->driver]]);

        $config = Config::fromArray(config('backup'));
        $backupJob = BackupJobFactory::createFromConfig($config);
        if (! defined('SIGINT')) {
            $backupJob->disableSignals();
        }

        if ($this->data['option'] === 'only-db') {
            $backupJob->dontBackupFilesystem();
        }

        if ($this->data['option'] === 'only-files') {
            $backupJob->dontBackupDatabases();
        }

        if (! empty($this->data['option'])) {
            $prefix = str_replace('_', '-', $this->data['option']).'-';

            $backupJob->setFilename($prefix.date('Y-m-d-H-i-s').'.zip');
        }

        $backupJob->run();
    }
}
