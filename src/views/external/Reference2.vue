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
                <vx-card title="Step 2 of 3" title-color="primary" subtitle="Please share your overall impressions of View Sonic">
                    <div class="vx-row">
                        <div class="vx-col md:w-1/2 w-full">
                            <b>A. How would you rate View Sonic's overall performance?</b> 
                            <star-rating :increment="0.5"></star-rating>
                            <vs-textarea class="mt-4" v-model="textarea" placeholder="Add any additional comments here..."></vs-textarea>
                            <div class="mt-5">
                                <b>B. How well did View Sonic understand your needs?</b> 
                                <star-rating :increment="0.5"></star-rating>
                                <vs-textarea class="mt-4" v-model="textarea" placeholder="Add any additional comments here..."></vs-textarea>
                            </div>
                        </div>
                        <div class="vx-col md:w-1/2 w-full">
                            <div>
                                <b>C. How was View Sonic's response time to your questions or requests?</b>
                                <star-rating :increment="0.5"></star-rating>
                                <vs-textarea class="mt-4" v-model="textarea" rows="7" placeholder="Add any additional comments here..."></vs-textarea>
                            </div>
                        </div>
                    </div>
                </vx-card>
            </vs-col>
        </vs-row>   
         <router-link to="/external/References">
            <vs-button color="warning" class="ml-5">Back</vs-button>
        </router-link>
        <router-link to="/external/References3">
            <vs-button class="mt-5 ml-2">
                Save &amp; Continue
            </vs-button>
        </router-link>
    </div>
</template>
<script>

import vSelect from 'vue-select'
import StarRating from 'vue-star-rating'
import CorporatePanel from '@/components/CorporatePanel.vue'

export default {
    name: 'ExternalReference',
    data() {
        return {
            radio1: "Professional",
            radio2: "Former Collegue",
            OtherValue: "",
            checkbox1: "Former",
            input1: "1",
            selected: "years",
            textarea: ""
        }
    },
    components: {
        'v-select': vSelect,
        StarRating,
        'corporate-panel': CorporatePanel
    }
}
</script>
