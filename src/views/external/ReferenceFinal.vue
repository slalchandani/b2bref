<template>
    <div>
        <vs-row>
            <vs-col>
                 <vx-card title="Reference Request From: Sam Elliot (View Sonic)" 
                    title-color="primary"
                    subtitle=""
                >
                    <div class="vx-row mb-2">
                        <div class="vx-col md:w-1/2 w-full">
                            <p>
                                Thank you for agreeing to provide a reference for Sam Elliot (View Sonic).
                                The purpose of this reference is listed below and Sam has added a private
                                note for you.
                            </p>
                            <p class="mt-5">
                                <b class="text-primary">Reference Purpose:</b><br/>
                                Responding to New Client Request for References
                            </p>

                        </div>
                        <div class="vx-col md:w-1/2 w-full" style="border-left: 1px solid #ccc">
                            <b class="text-primary">Instructions</b>
                            <p class="text-sm">
                                1. Please respond to the questions presented.<br/>
                                2. Please enter closing comments for another client to consider.<br/>
                                3. There may be instances when a client wishes to contact you with additional questions, if 
                                    you are willing to participate, please select your preference contact methods.<br/>
                                4. Please confirm your contact information as Sam Elliot has it stored.
                            </p>
                        </div>
                    </div>
                </vx-card>
            </vs-col>
        </vs-row>
        
       <vs-row>
           <corporate-panel/>
       </vs-row>

        <vs-row class="mt-5">
            <vs-col>
                 <vx-card style="background-color: #10163a;padding:120px" class="text-white">
                    <p style="text-align:center">
                        Summary list of questions and responses goes here with opportunity to go back and edit that section.
                    </p>
                </vx-card>
            </vs-col>
        </vs-row> 
         <router-link to="/external/References3">
            <vs-button color="warning" class="ml-5">Back</vs-button>
        </router-link>
        <vs-button class="mt-5 ml-2">
            Submit Reference
        </vs-button>
        <hr class="mt-5 mb-5"/>
        <vs-row class="mt-5">
            <vs-col>
                <p>
                    Since you have agreed to respond to further questions from other that view your reference, a complimentary account has been created for you. Your login is your email address and a temporary password has been emailed to you. When you login you will be able to view all references you have provided and respond to a question from within the portal.
                </p>
            </vs-col>
        </vs-row>  
        <vs-button class="mt-5" color="danger">
            Exit Portal
        </vs-button>
    </div>
</template>
<script>
import vSelect from 'vue-select'
import CorporatePanel from '@/components/CorporatePanel.vue'

export default {
    name: 'ExternalReference',
    data() {
        return {
            radio1: "Yes",
            radio2: "Yes2",
            OtherValue: "",
            checkbox1: "Former",
            input1: "1",
            selected: "years",
            textarea: ""
        }
    },
    components: {
        'v-select': vSelect,
        'corporate-panel': CorporatePanel
    }
}
</script>
