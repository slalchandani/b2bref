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
            <corporate-panel></corporate-panel>
        </vs-row>
        
        

        <vs-row class="mt-5">
            <vs-col>
                <vx-card title="Step 1 of 3" title-color="primary" subtitle="Tell us about your relationship with Sam.">
                    <div class="vx-row">
                        <div class="vx-col md:w-1/4 w-full">
                            <b>A. How do you know Sam?</b> 
                            <ul class="center-x mt-3">
                                <li>
                                    <vs-radio v-model="radio1" vs-value="Professional">Professional</vs-radio>
                                </li>
                                <li>
                                    <vs-radio v-model="radio1" vs-value="Friend">Friend</vs-radio>
                                </li>
                                <li>
                                    <vs-radio v-model="radio1" vs-value="Relative">Relative</vs-radio>
                                </li>                       
                                <li>
                                    <vs-radio v-model="radio1" vs-value="Other">Other</vs-radio>
                                    <div class="default-input">
                                        <vs-input class="inputx" v-model="OtherValue"></vs-input>
                                    </div>                            
                                </li>                        
                            </ul>
                            <ul class="mt-3">
                                <li>
                                    <vs-checkbox v-model="chkWorkedTogether" vs-value="Former Collegue">Former Collegue / Past Client</vs-checkbox>
                                </li>
                                <li>
                                    <vs-checkbox v-model="chkExisting" vs-value="Existing Client">Existing Client</vs-checkbox>
                                </li>
                            </ul>
                        </div>
                        <div class="vx-col md:w-1/3 w-full">
                            <div class="vx-row">
                                <b>B. How long have you worked together?</b>
                                <div class="vx-col md:w-1/2 w-full">
                                    <vx-input-group class="mb-base mt-3">
                                        <vs-input v-model="wtYears" maxlength="2"/>
                                        <template slot="append">
                                            <div class="append-text bg-primary">
                                                <span>Years</span>
                                            </div>
                                        </template>
                                    </vx-input-group>
                                </div>
                                 <div class="vx-col md:w-1/2 w-full">
                                    <vx-input-group class="mb-base mt-3">
                                        <vs-input v-model="wtMonths" maxlength="2"/>
                                        <template slot="append">
                                            <div class="append-text bg-primary">
                                                <span>Months</span>
                                            </div>
                                        </template>
                                    </vx-input-group>
                                </div>
                            </div>

                            <div class="vx-row">
                                <b>C. How long have you worked for View Sonic?</b> 
                                <div class="vx-col md:w-1/2 w:full">
                                    <vx-input-group class="mb-base mt-3">
                                        <vs-input v-model="vwYears" maxlength="2"/>
                                        <template slot="append">
                                            <div class="append-text bg-primary">
                                                <span>Years</span>
                                            </div>
                                        </template>
                                    </vx-input-group>
                                </div>
                                <div class="vx-col md:w-1/2 w:full">
                                    <vx-input-group class="mb-base mt-3">
                                        <vs-input v-model="vwMonths" maxlength="2" />
                                        <template slot="append">
                                            <div class="append-text bg-primary">
                                                <span>Months</span>
                                            </div>
                                        </template>
                                    </vx-input-group>
                                </div>
                            </div>
                        </div>
                        <div class="vx-col md:w-1/3 w-full ml-10">
                           <b>D. What did you work on together?</b>
                           <vs-textarea v-model="textarea" placeholder="Provide a brief overview of projects or tasks you and Sam worked on together..." rows="6"></vs-textarea>
                        </div>                        
                    </div>
                    
                </vx-card>
            </vs-col>
        </vs-row>   
        <router-link to="/external/References2">
             <vs-button class="mt-5 ml-2">
                Save &amp; Continue
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
            radio1: "Professional",
            radio2: "Former Collegue",
            OtherValue: "",
            checkbox1: "Former",
            input1: "1",
            selected: "years",
            textarea: "",
            wtYears: 1,
            wtMonths: 0,
            chkWorkedTogether: true,
            chkExisting: false
        }
    },
    components: {
        'v-select': vSelect,
        'corporate-panel': CorporatePanel
    }
}
</script>
