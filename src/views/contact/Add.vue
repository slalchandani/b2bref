<template>
    <div>
        <vs-row vs-type="flex">
            <vs-col vs-lg="5" vs-sm="6" vs-xs="12">
                 <vx-card
                    title="Add New Reference Contact"
                    subtitle="Please enter values for all required fields"
                    title-color="primary"
                 >
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
                        <vs-input class="w-full" icon-pack="feather" icon="icon-calendar" icon-no-border label-placeholder="Relationship" v-model="relationship" />
                        </div>
                    </div>
                    
                     <div class="vx-row mb-2">
                        <div class="vx-col w-full" style="margin-top:12px">
                        <div class="text-primary text-sm">Preferred Contact Method</div>
                        <v-select class="w-full text-sm" placeholder="- Do Not Contact -" :options="['Email', 'Text', 'Phone']"></v-select>
                        </div>
                    </div>    
                    <div class="vx-row mb-2">
                        <div class="vx-col w-full">
                        <vs-input type="email" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label-placeholder="Email" v-model="email" />
                        </div>
                    </div>
                    <div class="vx-row mb-2">                        
                        <div class="vx-col w-full">
                            <vx-input-group>                                
                                <template slot="append">
                                    <div class="append-text text-sm bg-primary mt-5">
                                        <vs-checkbox v-model="syncMobile"></vs-checkbox> Allow Sync
                                    </div>                                    
                                </template>
                                <vs-input 
                                    class="w-full" 
                                    icon-pack="feather" 
                                    icon="icon-smartphone" 
                                    icon-no-border 
                                    label-placeholder="Mobile #" 
                                    v-model="mobile" />
                            </vx-input-group>
                        </div>
                    </div>
                    <div class="vx-row mb-2">
                        <div class="vx-col w-full">
                            <vx-input-group>                                
                                <template slot="append">
                                    <div class="append-text text-sm bg-primary mt-5">
                                        <vs-checkbox v-model="syncMobile"></vs-checkbox> Allow Sync
                                    </div>                                    
                                </template>
                                <vs-input class="w-full" icon-pack="feather" icon="icon-phone" icon-no-border label-placeholder="Office #" v-model="office" />
                            </vx-input-group>                        
                        </div>
                    </div>
                    <div class="vx-row mb-2">
                        <div class="vx-col w-full">
                            <vx-input-group>                                
                                <template slot="append">
                                    <div class="append-text text-sm bg-primary mt-5">
                                        <vs-checkbox v-model="syncMobile"></vs-checkbox> Allow Sync
                                    </div>                                    
                                </template>
                                <vs-input class="w-full" icon-pack="feather" icon="icon-briefcase" icon-no-border label-placeholder="Job Title" v-model="jobTitle" />
                            </vx-input-group>                        
                        </div>
                    </div> 
                    <div class="vx-row mb-2">
                        <div class="vx-col w-full">
                            <vx-input-group>                                
                                <template slot="append">
                                    <div class="append-text text-sm bg-primary mt-5">
                                        <vs-checkbox v-model="syncMobile"></vs-checkbox> Allow Sync
                                    </div>                                    
                                </template>
                                <vs-input class="w-full" icon-pack="feather" icon="icon-briefcase" icon-no-border label-placeholder="Organization" v-model="organization" />
                            </vx-input-group>                          
                        </div>
                    </div> 
                    <div class="vx-row mb-2">
                        <div class="vx-col w-full">
                            <vx-input-group>                                
                                <template slot="append">
                                    <div class="append-text text-sm bg-primary mt-5">
                                        <vs-checkbox v-model="syncMobile"></vs-checkbox> Allow Sync
                                    </div>                                    
                                </template>
                                <vs-input class="w-full" icon-pack="feather" icon="icon-briefcase" icon-no-border label-placeholder="Industry" v-model="industry" />
                            </vx-input-group>
                        </div>
                    </div>     
                    <div class="vx-row mb-2">
                        <div class="vx-col w-full">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-tag" icon-no-border label-placeholder="Education" v-model="education" />
                        </div>
                    </div>    
                </vx-card>  
            </vs-col>
            <vs-col vs-lg="6" vs-sm="6" vs-xs="12">
                <vx-card
                    title="Tips"
                    title-color="primary"
                    subtitle="Some things to think about when adding contact references"
                >
                    <vs-list>
                        <vs-list-item 
                            icon="check" 
                            title="Vouch for your skills"
                            subtitle="Add contacts that are familiar with your talents and work ethic and are willing to vouch for you."
                            >

                        </vs-list-item>
                        <vs-list-item
                            style="margin-top:15px"
                            icon="check"
                            title="Qualified Assessment"
                            subtitle="Your contacts should be able to attest to your skills, abilities, and qualifications as they relate to the nature of your references requests - seeking employment, securing new business, etc."
                        >
                        </vs-list-item>
                    </vs-list>
                   
                </vx-card>
                <vx-card
                    class="mt-6"
                    title="Allow Sync"
                    title-color="primary"
                    subtitle="Enabling synchronization with external contact changes"
                >
                    <div>
                        <p>
                           For fields providing the option to ‘Allow Synch’, the values in these fields will change when a contact updates data for those respective fields during submission or if a subscriber makes changes.
                        </p>
                        <vs-list>
                            <vs-list-item icon="check" title="Notification" subtitle="B2BREF will notify you when changes have been made to a contact."></vs-list-item>
                        </vs-list>
                    </div>
                </vx-card>
            </vs-col>
        </vs-row>
        <vs-row>
            <vs-col vs-lg="5" vs-sm="6" vs-xs="12">
                <div class="mt-5 float-right mr-5">
                    <vs-button class="mr-3" color="warning" type="filled">Cancel</vs-button>
                    <vs-button type="filled">Save &amp; Continue</vs-button>
                </div>                
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import vSelect from 'vue-select'
export default {    
    name: 'add-contact',
    components: {
        'v-select': vSelect
    },
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            office: "",
            contactMethod: 0,
            contactMethods: [],
            jobTitle: "",
            organization: "",
            industry: "",
            education: "",
            relationship: "",
            syncMobile: false
        }
    }
}
</script>
