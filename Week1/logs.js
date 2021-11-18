var x=[{
    name: "IV",
    action: "Turn On",
    date: "124689"
}, {
    name: "IV",
    action: "Turn On",
    date: "124689"
},
    {
        name: "Washer",
        action: "Turn On",
        date: "124689"
    },
    {
        name: "Selling Fan",
        action: "Turn On",
        date: "124689"
    },
    {
        name: "Washer",
        action: "Sleep",
        date: "124689"
    },
    {
        name: "IV",
        action: "Turn On",
        date: "124689"
    },
    {
        name: "Refrigerator",
        action: "Turn On",
        date: "124689"
    }, {
        name: "IV",
        action: "Turn On",
        date: "124689"
    }, {
        name: "IV",
        action: "Turn On",
        date: "124689"
    }, {
        name: "IV",
        action: "Turn On",
        date: "124689"
    }, {
        name: "IV",
        action: "Turn On",
        date: "124689"
    }, {
        name: "IV",
        action: "Turn On",
        date: "124689"
    },
    {
        name: "Refrigerator",
        action: "Sleep",
        date: "124689"
    }, {
        name: "Refrigerator",
        action: "Turn On",
        date: "124689"
    },
    {

        name: "Refrigerator",
        action: "Turn Off",
        date: "124689"
    }, {
        name: "IV",
        action: "Turn On",
        date: "124689"
    }, {
        name: "IV",
        action: "Turn On",
        date: "124689"
    }, {
        name: "Selling Fan",
        action: "Turn Off",
        date: "124689"
    },
    {
        name: "Washer",
        action: "Turn On",
        date: "124689"
    },
    {
        name: "Selling Fan",
        action: "Turn On",
        date: "124689"
    },
    {
        name: "Washer",
        action: "Sleep",
        date: "124689"
    },
    {

        name: "Refrigerator",
        action: "Turn Off",
        date: "124689"
    }, {
        name: "IV",
        action: "Turn On",
        date: "124689"
    },
];
console.log(x.length);
// function reload(y){
//     var table="<thead><tr><th>Device ID</th><th>Name</th><th>Action</th><th>Date</th></tr></thead><tbody>";
//     var a=y.length+1
//     for (let i = 1; i <a; i++) {
//         table += "<tr><td>" +
//             i+
//             "</td><td>" +
//             y[i-1].name +
//             "</td><td>" +
//             y[i-1].action +
//             "</td><td>" +
//             y[i-1].date +
//             "</td></tr>";
//     };
//     table = table+"<tr><td colspan=\"3\">"+"Total"+"</td><td>"+a+"</td></tr></tbody>"
//     document.getElementById("table").innerHTML = table;
// }
// var y=x;
// reload(y);
// function searchName() {
//     y = [];
//     const name = document.getElementById("searchname").value.toUpperCase();
//     if(name=="") alert("chưa điền tên");
//     else {
//         for (let i = 0; i < x.length; i++) {
//             if (x[i].name.toUpperCase() == name) {
//                 y.push(x[i]);
//                 console.log(x[i].id);
//             }
//         }
//
//         reload(y);
//     }
// }
    $(document).ready(function () {

        /******************************************/
        function reload(y){
            var table="<thead><tr><th>Device ID</th><th>Name</th><th>Action</th><th>Date</th></tr></thead><tbody>";
            var a=y.length+1
            for (let i = 1; i <a; i++) {
                table += "<tr><td>" +
                    i+
                    "</td><td>" +
                    y[i-1].name +
                    "</td><td>" +
                    y[i-1].action +
                    "</td><td>" +
                    y[i-1].date +
                    "</td></tr>";
            };
            table = table+"<tr><td colspan=\"3\">"+"Total"+"</td><td>"+a+"</td></tr></tbody>"
            $("table").html(table) ;
        }
        var y=x;
        reload(y);
        // function searchName() {
        //     y = [];
        //     var name = $("searchname").value.toUpperCase();
        //     if(name=="") alert("chưa điền tên");
        //     else {
        //         for (let i = 0; i < x.length; i++) {
        //             if (x[i].name.toUpperCase() == name) {
        //                 y.push(x[i]);
        //                 console.log(x[i].id);
        //             }
        //         }
        //
        //         reload(y);
        //     }
        // }
        /**********************************************/
        function page(y){
            $('#nav').empty();
            var rowsShown = 9;
            //   var rowsTotal = $('#table tbody tr').length;
            var rowsTotal = y.length;
            var numPages = rowsTotal / rowsShown;
            for (i = 0; i < numPages; i++) {
                var pageNum = i + 1;
                $('#nav').append('<a href="#" rel="' + i + '">' + '<div>' + pageNum + '</div></a>');
            }
            $('#table thead tr').show();
            $('#table tbody tr').hide();
            $('#table tbody tr').slice(0, rowsShown).show();
            $('#nav a:first').addClass('active');
            $('#nav a').bind('click', function () {
                $('#nav a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                var startItem = currPage * rowsShown;
                var endItem = startItem + rowsShown;
                $('#table tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).css('display', 'table-row').animate({opacity: 1}, 300);
            });
        }
        page(y);
        /************************************/
        $( "#search" ).click(function() {
            y = [];
            var name = $("#searchname").val().toUpperCase();
            if(name=="") alert("chưa điền tên");
            else {
                for (let i = 0; i < x.length; i++) {
                    if (x[i].name.toUpperCase() == name) {
                        y.push(x[i]);
                        console.log(x[i].id);
                    }
                }
                reload(y);
                page(y);
            }
        });


    // $("#searchname").on("keyup", function() {
    //     var value = $(this).val().toLowerCase();
    //     $("#table tr").filter(function() {
    //         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //     });
    // });

    /*****************************/

});