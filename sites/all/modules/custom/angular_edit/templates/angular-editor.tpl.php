<?php print l('Back', 'angular/edit'); ?>
<section ng-app="angularEditor" controller="angularEditorCTRL" entityType="<?php print $entity_type; ?>">
  <angular-edit-filters></angular-edit-filters>
  <angular-edit-list></angular-edit-list>
</section>
