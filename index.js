 var options = {
          series: [{
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }
    ],
          chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '32%',
            borderRadius: 5,
            borderRadiusApplication: 'end'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
      
      


        // --sidebar--
        
    document.addEventListener("DOMContentLoaded", function () {
        const sideItems = document.querySelectorAll(".side");
        sideItems.forEach(item => {
            item.addEventListener("click", function () {              
                sideItems.forEach(el => el.classList.remove("active"));          
                this.classList.add("active");
            });
        });
    });



  // const toggleBtn = document.getElementById('sidebarToggle');
  // const sidebar = document.getElementById('sidebar');

  // toggleBtn.addEventListener('click', () => {
  //   sidebar.classList.toggle('show');
  // });

  // document.addEventListener('click', function (event) {
  //   const isClickInside = sidebar.contains(event.target) || toggleBtn.contains(event.target);

  //   if (!isClickInside && sidebar.classList.contains('show')) {
  //     sidebar.classList.remove('show');
  //   }
  // });


