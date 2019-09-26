<template>
    <div>
        <vx-card title="Step 4 of 4: References Package Share Options">
            <div class="vx-row">
                <div class="vx-col md:w-1/2 w-full mt-5">
                    <p class="text-danger">
                        Package all received references from listed Reference Providers (layout TBD)
                    </p>
                    <div class="mt-4">
                        <vs-checkbox v-model="includePublic">Include Public Profile Information</vs-checkbox>
                        <vs-checkbox class="mt-2" v-model="includeCompany">Include Company Information</vs-checkbox>
                    </div>
                    <div class="mt-4">
                        <div class="text-primary text-sm">Select PDF Template Package</div>
                        <v-select style="width:300px" :options="['Standard', 'Professional', 'Office2019']"></v-select>
                        <vs-button class="mt-3" size="small">Preview Package</vs-button>
                        <vs-button class="ml-3" color="warning" size="small">Self-Send Package</vs-button>
                        
                    </div>
                </div>
                <div class="vx-col md:w-1/2 w-full">
                    <vx-card title="Package Guidance">
                         <p>
                            <b>Preview Package: </b> Displays a packaged PDF for confirmation
                        </p>
                        <p>
                            <b>Self-Send Package: </b> Sends an email that client will see (used as a self test)
                        </p>
                        <p class="mt-6">
                            Packages will be consolidated in PDF as per template selected.
                        </p>
                    </vx-card>
                   
                </div>
            </div>
            
        </vx-card>
        <vx-card class="mt-5">
            <p>
                By clicking ‘Accept Package’, I confirm Preview results and approve transmission of References to Jeff Bezos (Amazon).
            </p>
            <vs-checkbox class="mt-4" size="large" v-model="accept">Accept Package</vs-checkbox>
            
        </vx-card>
        <vs-button class="mt-4" size="large" color="primary">Submit</vs-button>
    </div>
</template>
<script>
import vSelect from 'vue-select'

export default {
    name: "share-reference-3",
    data() {
        return {
            includePublic: true,
            includeCompany: false,
            accept: false
        }
    },
    components: {
        'v-select': vSelect
    },
}
</script>
