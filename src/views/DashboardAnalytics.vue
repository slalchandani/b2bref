<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
========================================================================================== -->

<template>
  <div id="dashboard-analytics">
    <div class="vx-row">     

      <!-- CARD 1: SUBSCRIBERS GAINED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <statistics-card-line icon="UsersIcon" statistic="10" statisticTitle="References Pending" :chartData="analyticsData.subscribersGained" type='area'></statistics-card-line>
      </div>

      <!-- CARD 2: ORDER RECIEVED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <statistics-card-line icon="ShoppingBagIcon" statistic="5" statisticTitle="References Completed" :chartData="analyticsData.verifiedContacts" type='area'></statistics-card-line>
      </div>

      <!-- CARD 3: ORDER RECIEVED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <statistics-card-line icon="UsersIcon" statistic="2" statisticTitle="References Declined" :chartData="analyticsData.referencesDeclined" type='area'></statistics-card-line>
      </div>

      <!-- CARD 4: ORDER RECIEVED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <statistics-card-line icon="UsersIcon" statistic="12" statisticTitle="References Accepted" :chartData="analyticsData.referenecesAccepted" type='area'></statistics-card-line>
      </div>


    </div>

    <div class="vx-row">
        <!-- CARD 6: Product Orders -->
        <div class="vx-col w-full lg:w-1/3 mb-base">
            <vx-card title="Reference Requests">
                <!-- CARD ACTION -->
                <template slot="actions">
                    <change-time-duration-dropdown />
                </template>

                <div slot="no-body">
                    <vue-apex-charts type=radialBar height=465 :options="analyticsData.productOrdersRadialBar.chartOptions" :series="analyticsData.productOrdersRadialBar.series" />
                </div>

                <ul>
                    <li v-for="orderData in analyticsData.productOrdersRadialBar.analyticsData" :key="orderData.referenceStat" class="flex mb-3 justify-between">
                        <span class="flex items-center">
                                <span class="inline-block h-4 w-4 rounded-full mr-2 bg-white border-3 border-solid" :class="`border-${orderData.color}`"></span>
                                <span class="font-semibold">{{ orderData.referenceStat }}</span>
                        </span>
                        <span>{{ orderData.counts }}</span>
                    </li>
                </ul>
            </vx-card>
        </div>

        <!-- CARD 7: Reference Stats -->
        <div class="vx-col w-full lg:w-1/3 mb-base">
          <vx-card title="Reference Stats" subtitle="Last 3 Months">
            <template slot="actions">
              <feather-icon icon="MoreVerticalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
            </template>
            <div class="flex">
              <span class="flex items-center"><div class="h-3 w-3 rounded-full mr-1 bg-primary"></div><span>% Participation</span></span>
              <span class="flex items-center ml-4"><div class="h-3 w-3 rounded-full mr-1 bg-danger"></div><span>% Client Interaction</span></span>              
            </div>
            <div slot="no-body-bottom">
              <vue-apex-charts type="pie" width="90%" :options="chartOptions" :series="series" />
              <br/>
            </div>           
          </vx-card>
        </div>

        <!-- CARD 8: Activity Timeline -->
        <div class="vx-col w-full lg:w-1/3 mb-base">
            <vx-card title="Recent Reference Activity">
                <ul class="activity-timeline">
                    <li>
                        <div class="timeline-icon bg-primary">
                            <feather-icon icon="PlusIcon" svgClasses="text-white stroke-current w-5 h-5"></feather-icon>
                        </div>
                        <div class="timeline-info">
                            <p class="font-semibold">John Doe</p>
                            <span class="activity-desc">Reference provided by John Doe received.</span>
                        </div>
                        <small class="text-grey activity-e-time">25 mins ago</small>
                    </li>
                    <li>
                        <div class="timeline-icon bg-warning">
                            <feather-icon icon="AlertCircleIcon" svgClasses="text-white stroke-current w-5 h-5"></feather-icon>
                        </div>
                        <div class="timeline-info">
                            <p class="font-semibold">Email Thank You</p>
                            <span class="activity-desc">A thank you email was submitted to Jane Apple for her reference.</span>
                        </div>
                        <small class="text-grey activity-e-time">15 days ago</small>
                    </li>
                    <li>
                        <div class="timeline-icon bg-danger">
                            <feather-icon icon="CheckIcon" svgClasses="text-white stroke-current w-5 h-5"></feather-icon>
                        </div>
                        <div class="timeline-info">
                            <p class="font-semibold">Contact List Imported</p>
                            <span class="activity-desc">35 additional contacts were imported and await verification.</span>
                        </div>
                        <small class="text-grey activity-e-time">20 days ago</small>
                    </li>
                    <li>
                        <div class="timeline-icon bg-success">
                            <feather-icon icon="CheckIcon" svgClasses="text-white stroke-current w-5 h-5"></feather-icon>
                        </div>
                        <div class="timeline-info">
                            <p class="font-semibold">User added to Sabertooth Technology Group</p>
                            <span class="activity-desc">Successfully added Richard Doe to business account.</span>
                        </div>
                        <small class="text-grey activity-e-time">25 days ago</small>
                    </li>      
                     <li>
                        <div class="timeline-icon bg-success">
                            <feather-icon icon="CheckIcon" svgClasses="text-white stroke-current w-5 h-5"></feather-icon>
                        </div>
                        <div class="timeline-info">
                            <p class="font-semibold">User added to Sabertooth Technology Group</p>
                            <span class="activity-desc">Successfully added Thomas Bazinga to business account.</span>
                        </div>
                        <small class="text-grey activity-e-time">25 days ago</small>
                    </li>               
                </ul>
            </vx-card>
        </div>
    </div>

    <div class="vx-row">
      <!-- CARD 9: DISPATCHED ORDERS -->
      <div class="vx-col w-full lg:w-2/3 mb-base">
        <vx-card title="Dispatched Reference Requests">
          <div slot="no-body" class="mt-4">
            <vs-table :data="users">
              <template slot="thead">
                <vs-th>REQUEST ID</vs-th>
                <vs-th>STATUS</vs-th>
                <vs-th>EMAIL ADDRESS</vs-th>
                <vs-th>BUSINESS NAME</vs-th>                
                <vs-th>DATE SUBMITTED</vs-th>
                <vs-th>ESTIMATED RESPONSE DATE</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].orderNo">
                    <span>#{{data[indextr].orderNo}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].status">
                    <span class="flex items-center px-2 py-1 rounded"><div class="h-3 w-3 rounded-full mr-2" :class="'bg-' + data[indextr].statusColor"></div>{{data[indextr].status}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <ul class="users-liked user-list">
                        <li v-for="(user, userIndex) in data[indextr].usersLiked" :key="userIndex">
                            <vx-tooltip :text="user.name" position="bottom">
                                <vs-avatar :src="require(`@/assets/images/portrait/small/${user.img}`)" size="30px" class="border-2 border-white border-solid -m-1"></vs-avatar>
                            </vx-tooltip>
                        </li>
                    </ul>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].location}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].distance}}</span>
                    <vs-progress :percent="data[indextr].distPercent" :color="data[indextr].statusColor"></vs-progress>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].startDate}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].estDelDate}}</span>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>

        </vx-card>        
      </div>
      <div class="vx-col w-full lg:w-1/3 mb-base">
      <vx-card title="Service Credit Hours">
        <div slot="no-body" class="mt-4">
          <vs-table>
            <template slot="thead">
              <vs-th>Company</vs-th>
              <vs-th>Hours</vs-th>
            </template>
          </vs-table>
        </div>
      </vx-card>
      </div>
    </div>

  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from './ui-elements/card/analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'

export default {
    data() {
        return {
            analyticsData: analyticsData,
            isImp: false,
            navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
            show: false,
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10,
            series: [ 18, 82],
            chartOptions: {
              labels: ['Client Interaction', 'Participation'],
              fill: {
                colors: ['#10163a','#5b3cc4']
              },
              legend: {
                show: false
              },
              options: {    
                plotOptions: {
                  pie: {
                    customScale: 0.85,
                    dataLabels: {
                      enabled: false
                    }
                  }
                },
                legend: {
                  show: false
                },
                dataLabels: {
                  enabled: false
                }
              }
            },
            'tableList': [
                'vs-th: Component',
                'vs-tr: Component',
                'vs-td: Component',
                'thread: Slot',
                'tbody: Slot',
                'header: Slot'
            ],
            users: [{
                    "orderNo": 879985,
                    "status": "Moving",
                    "statusColor": "success",
                    "operator": "Cinar Knowles",
                    "operatorImg": "avatar-s-2.png",
                    usersLiked: [
                        { name: 'Vennie Mostowy', img: 'avatar-s-5.png' },
                        { name: 'Elicia Rieske', img: 'avatar-s-7.png' },
                        { name: 'Julee Rossignol', img: 'avatar-s-10.png' },
                        { name: 'Darcey Nooner', img: 'avatar-s-8.png' }
                    ],
                    "location": "Anniston, Alabama",
                    "distance": "130 km",
                    "distPercent": 80,
                    "startDate": "14:58 26/07/2018",
                    "estDelDate": "28/07/2018"
                },
                {
                    "orderNo": 156897,
                    "status": "Pending",
                    "statusColor": "warning",
                    "operator": "Britany Ryder",
                    "operatorImg": "avatar-s-4.png",
                    usersLiked: [
                        { name: 'Trina Lynes', img: 'avatar-s-1.png' },
                        { name: 'Lilian Nenez', img: 'avatar-s-2.png' },
                        { name: 'Alberto Glotzbach', img: 'avatar-s-3.png' }
                    ],
                    "location": "Cordova, Alaska",
                    "distance": "234 km",
                    "distPercent": 60,
                    "startDate": "14:58 26/07/2018",
                    "estDelDate": "28/07/2018"
                },
                {
                    "orderNo": 568975,
                    "status": "Moving",
                    "statusColor": "success",
                    "operator": "Kishan Ashton",
                    "operatorImg": "avatar-s-1.png",
                    usersLiked: [
                        { name: 'Lai Lewandowski', img: 'avatar-s-6.png' },
                        { name: 'Elicia Rieske', img: 'avatar-s-7.png' },
                        { name: 'Darcey Nooner', img: 'avatar-s-8.png' },
                        { name: 'Julee Rossignol', img: 'avatar-s-10.png' },
                        { name: 'Jeffrey Gerondale', img: 'avatar-s-9.png' },
                    ],
                    "location": "Florence, Alabama",
                    "distance": "168 km",
                    "distPercent": 70,
                    "startDate": "14:58 26/07/2018",
                    "estDelDate": "28/07/2018"
                },
                {
                    "orderNo": 245689,
                    "status": "Canceled",
                    "statusColor": "danger",
                    "operator": "Anabella Elliott",
                    "operatorImg": "avatar-s-6.png",
                    usersLiked: [
                        { name: 'Vennie Mostowy', img: 'avatar-s-5.png' },
                        { name: 'Elicia Rieske', img: 'avatar-s-7.png' }
                    ],
                    "location": "Clifton, Arizona",
                    "distance": "125 km",
                    "distPercent": 95,
                    "startDate": "14:58 26/07/2018",
                    "estDelDate": "28/07/2018"
                }

            ]
        }
    },
    components: {
        VueApexCharts,
        StatisticsCardLine,
        ChangeTimeDurationDropdown
    },
}
</script>

<style lang="scss">
#dashboard-analytics {
  .greet-user{
    position: relative;
    .decore-left{
      position: absolute;
      left:0;
      top: 0;
    }
    .decore-right{
      position: absolute;
      right:0;
      top: 0;
    }
  }

  @media(max-width: 576px) {
    .decore-left, .decore-right{
      width: 140px;
    }
  }
}
</style>
