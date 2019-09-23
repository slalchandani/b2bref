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
                <vx-card title="Step 3 of 3" title-color="primary" subtitle="Please let us know about View Sonic's performance">
                    <div class="vx-row">
                        <div class="vx-col w-full">
                            <b>A. Did View Sonic exceed your expectations?</b>
                            <ul class="center-x mt-3">
                                <li>
                                    <vs-radio v-model="radio1" vs-value="Yes">Yes</vs-radio>
                                </li>
                                <li>
                                    <vs-radio v-model="radio1" vs-value="No" color="danger">No</vs-radio>
                                </li>
                            </ul>
                            <vs-textarea rows="5" placeholder="Enter comments here..."></vs-textarea>
                            <div>
                                <b>B. Is there anything else to consider before working with View Sonic?</b> 
                                <vs-textarea rows="5" placeholder="Enter comments here..."></vs-textarea>
                            </div>
                            <div>
                                <b>C. Would you be willing to answer additional questions regarding your reference when shared with prospective clients?</b>
                                <ul class="center-x mt-3">
                                    <li>
                                        <vs-radio v-model="radio2" vs-value="Yes2">Yes</vs-radio>
                                    </li>
                                    <li>
                                        <vs-radio v-model="radio2" color="danger" vs-value="No2">No</vs-radio>
                                    </li>
                                </ul>
                                <vs-textarea rows="5" placeholder="Enter comments here..."></vs-textarea>
                            </div>
                            <div class="ml-10">
                                <div class="vx-row">
                                    <div class="vx-col md:w-1/2 w-full">
                                        <b>
                                            Please indicate your contact preferences:
                                        </b>
                                        <ul class="center mt-3">
                                            <li>
                                                <vs-checkbox>
                                                    B2BRef Messaging
                                                </vs-checkbox>
                                            </li>
                                            <li>
                                                <vs-checkbox>
                                                    Email
                                                </vs-checkbox>
                                            </li>
                                            <li>
                                                <vs-checkbox>
                                                    Phone
                                                </vs-checkbox>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="vx-col md:w-1/2 w-full">
                                        <vx-card>
                                            <p>
                                                When selecting 'phone', indicate if you would allow
                                                <b>B2BRef</b> to schedule a call on your behalf or select your
                                                preferred time ranges and days.
                                            </p>
                                        </vx-card>
                                    </div>
                                </div>
                                
                            </div>
                        </div>           
                    </div>                    
                </vx-card>
            </vs-col>
        </vs-row>   
        <router-link to="/external/References2">
            <vs-button color="warning" class="ml-5">Back</vs-button>
        </router-link>
        <router-link to="/external/final">
             <vs-button class="mt-5 ml-2">
                Save &amp; Review
            </vs-button>
        </router-link>       
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
