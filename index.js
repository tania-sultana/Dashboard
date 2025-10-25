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
  


$('#sidebarToggle').on('click', function () {
  $('#sidebar').toggleClass('show-sidebar');
});

window.addEventListener('click', function (event) {
  if(window.innerWidth <= 768){
    if (!event.target.closest('#sidebar') && !event.target.closest('#sidebarToggle')) {
      $('#sidebar').css('transform', 'translateX(-100%)');
      $('#sidebar').removeClass('show-sidebar');
    }
  }
});

// window.addEventListener('resize', function () {
//   if (window.innerWidth > 768) {
//     $('#sidebar').css('transform', 'translateX(0)');
//   }else{
//     $('#sidebar').css('transform', 'translateX(-100%)');
//     $('#sidebar').removeClass('show-sidebar');
//   }
// });


// ----new-admission dropdown----
document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.dropdown-item').forEach(el => el.classList.remove('active'));

        this.classList.add('active');

        document.getElementById('selectedCourse').textContent = this.dataset.course;
        document.getElementById('selectedInstructor').textContent = this.dataset.instructor;
      });
    });


// ------------new admission payment-

    const paymentOptions = document.querySelectorAll('.payment-option');
paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
        paymentOptions.forEach(opt => opt.classList.remove('active')); 
        option.classList.add('active'); 
    });
});
