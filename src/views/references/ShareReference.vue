<template>
    <div>
        <vx-card title="Step 1 of 3: Please Select Client Requesting Reference" title-color="primary" subtitle="If the client is not in your contacts list, please click 'Add Client'.">
            <div class="vx-row">
                <div class="vx-col md:w-1/2 w-full mt-5">
                    <vs-button>
                        <b>Select Client from Contact List</b>
                        <p>
                            (at conclusion of share, this contact will be recognized as participating in a 'Client' roel (if not already))
                        </p>
                    </vs-button>
                </div>
                <div class="vx-col md:w-1/2 w-full mt-5">
                    <vs-button color="warning">
                        <b>Add New Client</b>
                        <p>
                            (at conclusion of share, this contact will be recognized as participating in a 'Client' role (if not already))
                        </p>
                    </vs-button>
                </div>
            </div>
            <div class="vx-row">
                <div class="vx-col w-full mt-5">
                    <p style="text-align:center">
                        Selection will include: Name, Email and other contact information.
                    </p>
                </div>                
            </div>
        </vx-card>
        <vx-card class="mt-6" title="Step 2 of 3: Enter Shared Details for transmission to: JEFF BEZO (Amazon)" title-color="primary">
            <div class="vx-row mb-2">
                <div class="vx-col md:w-1/4 w-full mt-5">
                    <vs-input class="w-full" icon-pack="feather" icon="icon-info" icon-no-border label-placeholder="Reference Purpose" v-model="purpose"></vs-input>
                   
                </div>  
                <div class="vx-col md:w-1/4 w-full mt-5">
                    <div class="text-primary text-sm"># References to Share</div>
                    <vs-input-number v-model="count" min="1" max="9"></vs-input-number>
                </div>
                <div class="vx-col md:w-1/4 w-full mt-5">
                    <div class="text-primary text-sm">
                        SMS Client (optional)
                    </div>
                    <ul class="centerx">
                        <li>
                            <vs-radio v-model="sms" vs-value="yes">Yes</vs-radio>
                        </li>
                        <li>
                            <vs-radio v-model="sms" vs-value="no">No</vs-radio>
                        </li>
                    </ul>
                </div>
                <div class="vx-col md:w-1/4 w-full mt-5">
                    <div class="text-primary text-sm">Reference Type</div>
                    <ul class="centerx">
                        <li>
                            <vs-radio v-model="referenceType" vs-value="text">Text</vs-radio>
                        </li>
                        <li>
                            <vs-radio v-model="referenceType" vs-value="video">Video</vs-radio>
                        </li>
                    </ul>
                </div>
                                         
            </div>
            <div class="vx-row mb-2">
                <div class="vx-col w-full">
                    <div class="text-primary text-sm mt-6">Message to Client</div>
                    <vs-textarea v-model="message" rows="7">

                    </vs-textarea>
                </div>                
            </div>
        </vx-card>
        <router-link to="/references/share/2">
            <vs-button class="mt-5" color="primary">Save & Continue</vs-button>
        </router-link>
        
    </div>
</template>
<script>
export default {
    name: 'share-reference',
    data() {
        return {
            purpose: "",
            count: 5,
            referenceType: "text",
            message: "",
            sms: "yes"
        }
    }
}
</script>
