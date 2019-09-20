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
        
        <vs-row class="mt-6">
            <vs-col vs-lg="4" vs-sm="12" vs-xs="12">
                <vx-card title="Private Note for John Doe" title-color="primary">
                    <p>
                        Please emphasize my great character strengths and my honesty.
                        I am hoping you can get to this quick so I can secure the sale.
                    </p>
                </vx-card>
            </vs-col>
            <vs-col vs-lg="4" vs-sm="12" vs-xs="12">
                <vx-card title="About View Sonic" title-color="primary">
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td>Website:</td>
                                <td>www.viewsonic.com</td>
                            </tr>
                            <tr>
                                <td>Social Media:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Services:</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </vx-card>
            </vs-col>
            <vs-col vs-lg="4" vs-sm="12" vs-xs="12">
                <vx-card title="View Sonic Services" title-color="primary">
                    <p>Services offered by ViewSonic could be listed here.</p>
                </vx-card>
            </vs-col>
        </vs-row>

        <vs-row class="mt-5">
            <vs-col>
                <vx-card title="Question 1 of 3" title-color="primary" subtitle="Please provide responses to the Reference Questions presented.">
                    <div class="vx-row">
                        <div class="vx-col md:w-1/3 w-full">
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
                                    <vs-radio v-model="radio2" vs-value="Former Collegue">Former Collegue / Past Client</vs-radio>
                                </li>
                                <li>
                                    <vs-radio v-model="radio2" vs-value="Existing Client">Existing Client</vs-radio>
                                </li>
                            </ul>
                        </div>
                        <div class="vx-col md:w-1/3 w-full">
                            <b>B. How long have you worked together?</b> 
                            <vx-input-group class="mb-base mt-3">
                                <vs-input v-model="input1"/>
                                <template slot="append">
                                    <v-select :options="['months', 'years']" v-model="selected" placeholder="- Select Unit of Measure -"></v-select>
                                </template>
                            </vx-input-group>

                             <b>C. How long have you worked for View Sonic?</b> 
                            <vx-input-group class="mb-base mt-3">
                                <vs-input v-model="input1"/>
                                <template slot="append">
                                    <v-select :options="['months', 'years']" v-model="selected" placeholder="- Select Unit of Measure -"></v-select>
                                </template>
                            </vx-input-group>
                        </div>
                        <div class="vx-col md:w-1/3 w-full">
                           <b>D. What did you work on together?</b>
                           <vs-textarea v-model="textarea" placeholder="Provide a brief overview of projects or tasks you and Sam worked on together..." rows="5"></vs-textarea>
                        </div>                        
                    </div>
                    
                </vx-card>
            </vs-col>
        </vs-row>   
        <router-link to="/external/References2">
             <vs-button class="mt-5 ml-5">
                Save &amp; Continue
            </vs-button>
        </router-link>
       
    </div>
</template>
<script>
import vSelect from 'vue-select'
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
        'v-select': vSelect
    }
}
</script>
