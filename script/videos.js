var options = {
  valueNames: ["name", "born", "grade", { data: ["Field"] }],
  page: 4,
  pagination: true,
};
var userList = new List("users", options);

function resetList() {
  userList.search();
  userList.filter();
  userList.update();
  $(".filter-all").prop("checked", true);
  $(".filter").prop("checked", false);
  $(".search").val("");
  //console.log('Reset Successfully!');
}

function updateList() {
  var values_Field = $("input[name=Field]:checked").val();
  var values_grade = $("input[name=grade]:checked").val();
  console.log(values_Field, values_grade);

  userList.filter(function (item) {
    var FieldFilter = false;
    var gradeFilter = false;

    if (values_Field == "all") {
      FieldFilter = true;
    } else {
      FieldFilter = item.values().Field == values_Field;
    }
    if (values_grade == null) {
      gradeFilter = true;
    } else {
      gradeFilter = item.values().grade.indexOf(values_grade) >= 0;
    }
    return gradeFilter && FieldFilter;
  });
  userList.update();
  //console.log('Filtered: ' + values_Field);
}

$(function () {
  //updateList();
  $("input[name=Field]").change(updateList);
  $("input[name=grade]").change(updateList);

  userList.on("updated", function (list) {
    if (list.matchingItems.length > 0) {
      $(".no-result").hide();
    } else {
      $(".no-result").show();
    }
  });
});
