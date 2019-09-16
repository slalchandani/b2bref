
<template>
  <div>
     <vs-row vs-type="flex">
       <vs-col vs-lg="5" vs-sm="6" vs-xs="12">
            <vx-card>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="First Name" v-model="firstName" />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Last Name" v-model="lastName" />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input type="email" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label-placeholder="Email" v-model="email" />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" icon-pack="feather" icon="icon-smartphone" icon-no-border label-placeholder="Mobile #" v-model="mobile" />
                </div>
              </div>
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" icon-pack="feather" icon="icon-phone" icon-no-border label-placeholder="Office #" v-model="office" />
                </div>
              </div>    
              <div class="vx-row mb-2">
                <div class="vx-col w-full" style="margin-top:12px">
                  <v-select class="w-full" label="Preferred Contact Method" placeholder="Preferred Contact Method" :options="['Email', 'Text', 'Phone']"></v-select>
                </div>
              </div>    
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" icon-pack="feather" icon="icon-briefcase" icon-no-border label-placeholder="Job Title" v-model="jobTitle" />
                </div>
              </div> 
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" icon-pack="feather" icon="icon-briefcase" icon-no-border label-placeholder="Organization" v-model="organization" />
                </div>
              </div> 
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" icon-pack="feather" icon="icon-briefcase" icon-no-border label-placeholder="Industry" v-model="industry" />
                </div>
              </div>     
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" icon-pack="feather" icon="icon-tag" icon-no-border label-placeholder="Education" v-model="education" />
                </div>
              </div>    
          </vx-card>  
       </vs-col>
       <vs-col vs-lg="5" vs-sm="6" vs-xs="12">
         <vx-card title="Social Information">           
           <div>
             <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" icon-pack="feather" icon="icon-linkedin" icon-no-border label-placeholder="LinkedIn Profile" v-model="linkedIn" />
                </div>
              </div> 
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" icon-pack="feather" icon="icon-cloud" icon-no-border label-placeholder="Corporate Website" v-model="website" />
                </div>
              </div> 
              
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-textarea class="w-full" icon-pack="feather" rows="4" icon="icon-file-text" icon-no-border placeholder="Type information about yourself here..." label="About" v-model="about" />
                </div>
              </div> 
           </div>
         </vx-card>         
         <vx-card title="Services" style="margin-top:7px">
           <div>
             <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" icon-pack="feather" icon="icon-target" icon-no-border label-placeholder="Business Focus" v-model="focus" />
                </div>
              </div> 
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" icon-pack="feather" icon="icon-clipboard" icon-no-border label-placeholder="Services Provided" v-model="services" />
                </div>
              </div> 
              <div class="vx-row mb-2">
                <div class="vx-col w-full">
                  <vs-input class="w-full" icon-pack="feather" icon="icon-edit-2" icon-no-border label-placeholder="Qualified Skills" v-model="skills" />
                </div>
              </div>
           </div>
          </vx-card>       
       </vs-col>
    </vs-row>

    <!-- Save Changes  -->
    <hr style="margin-top:15px"/>    
    <vs-button type="filled" icon="save" style="margin-top:7px">Save Changes</vs-button>  
  </div>
 
 
</template>

<script>
import vSelect from 'vue-select'
export default {
  name: "profile",
  data() {
    return {
      firstName: "Sanj",
      lastName: "Lalchandani",
      email: "sanj@sabertoothweb.com",
      mobile: "",
      office: "",

      contactMethod: 0,
      contactMethods: [
        {text: "No Contact", value: 0 },
        {text: "Phone", value: 1 },
        {text: "Email", value: 2 },
        {text: "Text", value: 3 },
        {text: "B2B Chat", value: 4 },
      ],
      jobTitle: "CEO",
      organization: "Sabertooth Technology Group, LLC",
      industry: "Information Technology",
      education: "",
      linkedIn: "",
      website: "",
      about: "",
      focus: "",
      services: "",
      skills: ""

    }
  },
  components: {
    'v-select': vSelect
  },
  methods: {
    mounted() {
      this.wasSidebarOpen = this.$store.state.reduceButton;
      this.$store.commit("TOGGLE_REDUCE_BUTTON", true);
    },
    beforeDestroy() {
      if (!this.wasSidebarOpen)
        this.$store.commit("TOGGLE_REDUCE_BUTTON", false);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/pages/profile.scss";
</style>