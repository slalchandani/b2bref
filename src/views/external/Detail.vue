<template>
     <div>
        <div class="vx-row">
            <div class="vx-col md:w-2/3 w-full">
                <vx-card title="References Provided By: Sam Elliot" title-color="primary" subtitle="Secured URL will contain the following: ReferenceRequestID, ReferenceRequestContactId">            
                    <p>
                        Hello Jeff Bezos,
                    </p>
                    <p class="mt-5">
                        Sam Elliot from View Sonic has provided you with 3 references for his organization.  Please refer to the 
                        instructions for assistance.
                    </p>
                    <p>
                        All references provided may be downloaded as a report package.
                    </p>
                    <p class="mt-5">
                        Thanks for your consideration,
                    </p>
                    <p class="mt-5">
                        <b>B2BRef.com</b>
                    </p>                        
                </vx-card>
            </div>
            <div class="vx-col md:w-1/3 w-full">
                <vx-card title="Instructions" title-color="primary">
                    <div class="instructions">
                        This is where instructions will go.
                    </div>
                </vx-card>
            </div>
        </div>
        <!-- <overview-panel/>         -->
        <vs-row class="mt-4">
            <vx-card>
                <vs-row>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12">
                        <vs-icon round size="small" color="primary" class="mt-1 mr-3" icon="message-circle"></vs-icon>
                        Direct Communication With <span class="text-primary">Debbie Gibson, Senior VP at Sony Records</span>	
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12">                        
                        <ul class="demo-alignment" style="margin-top:-14px">
                            <li>
                                <vs-checkbox v-model="direct">Messaging</vs-checkbox>
                            </li>
                            <li>
                                <vs-checkbox v-model="voice" disabled="true">Voice</vs-checkbox>
                            </li>
                        </ul>
                    </vs-col>
                </vs-row>
            </vx-card>            
        </vs-row>    
        <vs-row class="mt-4">
            <vx-card>
                <div class="vx-row">
                    <div class="vx-col md:w-1/3 w-full">
                        In Reference to Response? 
                        <ul class="centerx">
                            <li>
                                <vs-radio v-model="referenceToResponse" vs-value="yes">Yes</vs-radio>
                            </li>
                            <li>
                                <vs-radio v-model="referenceToResponse" vs-value="no">No</vs-radio>
                            </li>
                        </ul>
                    </div> 
                    <div class="vx-col md:w-1/3 w-full">
                        <span>Questions to Reference: </span>
                        <v-select :options="['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5']"></v-select>
                    </div>
                     <div class="vx-col md:w-1/3 w-full">

                    </div>
                </div>                
            </vx-card>
        </vs-row>   
        <vs-row class="mt-4">
            <vx-card title="Question for Debbie Gibson" title-color="primary">               
                <vs-textarea v-model="textarea" rows="7" placeholder="Enter your question for Debbie Gibson here...">

                </vs-textarea>
                <router-link to="/external/overview">
                    <vs-button color="warning">Cancel</vs-button>
                </router-link>
                <vs-button class="ml-3">Send</vs-button>
            </vx-card>            
        </vs-row> 
    </div>
</template>
<script>
import vSelect from 'vue-select'
import OverviewPanel from '@/components/OverviewPanel.vue'

export default {
    name: 'external-detail',
    data: ()=>({
        direct: true,
        voice: false,
        referenceToResponse: "no",
        textarea: ""
    }),
    components: {
        'overview-panel': OverviewPanel,
        'v-select': vSelect
    }
}
</script>
<style scoped>
    .instructions {        
        min-height: 175px;        
        text-align: center;        
    }
    .note {
        font-style: italic;
    }

    input[type=radio] {
        display: inline;
    }
</style>



