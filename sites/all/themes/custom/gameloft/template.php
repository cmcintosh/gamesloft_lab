<?php

/**
* Implements hook_preprocess_page
*/
function gameloft_preprocess_page(&$variables) {

  /**
  * Load User Menu....
  */

  $variables['user_menu'] = FALSE;
  // Build links.
  $variables['user_menu'] = menu_tree('user-menu');
  // Provide default theme wrapper function.
  $variables['user_menu']['#theme_wrappers'] = array('menu_tree__user');

}
