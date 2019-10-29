<?php

namespace app\entities;

use app\App;
use m4dn3ss\framework\Entity;

/**
 * Class Word
 *
 * @inheritdoc
 * @package m4dn3ss\entities
 *
 * @property int $id
 * @property string $word
 * @property int $characters_count
 * @property string $alpha
 * @property int $is_definitions_fetched
 * @property int $sccrables_points
 * @property int $wwf_points
 *
 */
class Word extends Entity
{
    protected static $tableName = 'words';
}