<?php

function gameloft_assets_manager() {
  return theme('gameloft_filemanager');
}


/**
* Callback function for gameloft_assets_site_index.
*/
function gameloft_assets_site_index() {

  $vocab = taxonomy_vocabulary_machine_name_load("site");
  $terms = taxonomy_get_tree($vocab->vid);
  $data = array();
  foreach($terms as $tid => $term) {
    $item = new stdClass();
    $item->name = $term->name;
    $item->tid = $term->tid;
    $data[] = $item;
  }

  drupal_json_output(array('sites' => $data));
  exit();
}

function gameloft_assets_region_index() { }

function gameloft_assets_language_index() { }

function gameloft_assets_file_index() {
  $files = entity_load('file');

  foreach($files as $fid => $file) {
    $files[$fid]->url = file_create_url($file->uri);
  }

  drupal_json_output(array('files' => $files));
  exit();
}

function gameloft_assets_file_post() { }

function gameloft_assets_file_types() { }
