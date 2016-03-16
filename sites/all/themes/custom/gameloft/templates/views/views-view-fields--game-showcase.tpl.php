<div class="game">
  <?php if(strip_tags($fields['promote']->content) == 'Yes') { ?>
    <?php print $fields['field_homepage_art_1']->content; ?>
  <?php } else { ?>
    <?php print $fields['field_homepage_art']->content; ?>
  <?php } ?>
</div>
