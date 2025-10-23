var options = {
  chart: {
    height: 380,
    type: "line",
    foreColor: '#6D6D6D'
  },
  series: [
    {
      name: "Series 1",
      data: [44, 52,  50, 55, 58, 63, 60, 67]
    }
  ],
  fill: {
    type: "gradient",
    gradient: {
      type: 'vertical',
      shadeIntensity: 1,
      opacityFrom: 1,
      opacityTo: 1,
      colorStops: [
        {
          offset: 40,
          color: "#14B8A6",
          opacity: 1
        }
      ]
    }
  },
  grid: {
     borderColor: '#6D6D6D'
  },
  stroke: {
    curve: 'smooth'
  },
  yaxis: {
    min: 42,
    max: 72,
    tickAmount: 6
  },
   theme: {
    extend: {
      colors: {
        mode: "#6c757d", 
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

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
