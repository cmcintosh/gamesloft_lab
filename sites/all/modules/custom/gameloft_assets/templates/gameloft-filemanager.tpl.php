
<div ng-app="gameloftAssetManager" ng-controller="gameloftAssetsCTRL">
  <file-filters></file-filters>
  <file-search></file-search>
  <table>
    <thead>
      <tr>
        <td>Filename</td> <td>Site(s)</td> <td>Region(s)</td> <td>Created</td> <td>Updated</td> <td>Actions</td>
      </tr>
    </thead>
    <tr ng-repeat="file in files track by $index">
      <td><a href="{{file.url}}" taregt="_blank">{{file.filename}}</a></td>
      <td> </td>
      <td>{{file.created}}</td>
      <td>{{file.changed}}</td>
      <td> </td>
    </tr>
  </table>
</div>
