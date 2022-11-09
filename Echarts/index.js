import * as echarts from 'echarts'
var myChart = echarts.init(document.getElementById('main'))
myChart.setOption({
    title:{
        text:'charts'
    },
    tooltip:{},
    xAxis:{
        dara:['shirt','sweat','boots','pants']        
    },
    yAxis:{},
    series:[
        {
            name:'sold',
            type:'bar',
            data:[5,20,36,10]
        }
    ]
})