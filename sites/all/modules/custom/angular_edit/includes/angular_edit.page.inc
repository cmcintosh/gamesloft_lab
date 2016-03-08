<?php

/**
* Page callback for the Angular based editor.
*/
function angular_edit_display($entity_type = NULL) {

  $display = '';

  if ($entity_type == NULL) {
    $types = entity_get_info();

    $type_list = array();
    foreach($types as $entity_type => $type) {

      $type_list[] = l( t('Manage %type', array('%type' => $type['label']) ), "angular/edit/{$entity_type}", array('html' => TRUE) );
    }
    $display = theme('item_list', array('title' => t('Select Content to manage'), 'items' => $type_list, 'empty' => t('There are no register entities.')));
  }
  else {
    $display = theme('angular_edit_display', array('entity_type' => $entity_type));
  }

  return $display;
}


/**
* Rest Callback to get an index of a specific entity type.
*/
function angular_edit_js_index($entity_type = NULL) {
  if($entity_type == NULL) { exit(); }
  $entities = entity_load($entity_type, FALSE);
  drupal_json_output(array('data' => $entities));
  exit();
}

/**
* Rest callback to post the data for an entity.
*/
function angular_edit_js_post($entity_type) {
  if($entity_type == NULL) { exit(); }
  $entity = $_POST['entity'];
  try {
    if ( entity_get_controller($entity_type)->save($entity) ) {
      drupal_json_output(array('response' => $entity));
    } else {
      drupal_json_output(array('error' => t('Could not save entity')));
    }
  }
  catch (Exception $e) {
    watchdog_exception('angular_editor', $e);
    drupal_json_output(array('error' => t('Could not save entity')));
  }

}
