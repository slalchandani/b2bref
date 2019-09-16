<template>
    <div>
        <vs-row>
            <vs-col vs-lg="3" vs-sm="6" vs-xs="12">
                <vx-card
                    title="Reference Contacts"
                    title-color="primary"
                    subtitle="Search and select contacts below"
                >
                    <vx-input-group class="mb-base">
                        <template slot="append">
                            <div class="append-text bg-primary">
                                <vs-button icon="search"></vs-button>                               
                            </div>
                        </template>
                        <vs-input placeholder="search name" />
                    </vx-input-group>
                    <vs-list>                        
                        <div v-for="contact in contacts" :key="contact">
                            <vs-list-item :title="contact" class="cursor-pointer">      
                               
                            </vs-list-item>
                        </div>                       
                    </vs-list>
                </vx-card>
            </vs-col>
           
            <vs-col vs-lg="5" vs-sm="6" vs-xs="12">
                <vx-card
                    title="Contact Details"
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
                    <div class="float-right mr-7 mt-5">
                        <vs-button class="mr-2">Share</vs-button>
                        <vs-button class="mr-2">View</vs-button>
                        <vs-button>Request Reference</vs-button>
                    </div>
                </vx-card>  
            </vs-col>            
           
            <vs-col vs-lg="4" vs-sm="6" vs-xs="12">
                <vx-card
                    title="Contact Activity"
                >
                    <vs-table>
                        <vs-tr>
                            <vs-td>References Provided</vs-td>
                            <vs-td>3</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>References Viewed By Others</vs-td>
                            <vs-td>2</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Reference Types Provided</vs-td>
                            <vs-td>Text, Video</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td># Declined Requests</vs-td>
                            <vs-td>1</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td># Skill Confirmations</vs-td>
                            <vs-td>5</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td># Direct Interactions</vs-td>
                            <vs-td>2</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Avg Question Response</vs-td>
                            <vs-td>1 min, 30 seconds</vs-td>
                        </vs-tr>
                        <vs-tr>
                            <vs-td>Roles Played</vs-td>
                            <vs-td>Reference Provider</vs-td>
                        </vs-tr>
                    </vs-table>
                </vx-card>
            </vs-col>

        </vs-row>
    </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
    name: 'contact-manager',
    components: {
        'v-select': vSelect
    },
    data() {
        return {
            searchText: "",
            contacts: [
                "Christina Applegate",
                "Richard Bowles",
                "David Carrington",                
                "Destiny Glow",
                "Robert Hasselbeck",
                "Kerri Johnson",
                "Jacob Malone",
                "Sam Nigel",
                "Kristy Oaster",
                "Jim Odle",
                "Walter Peabody",
                "Deborah Qader",
                "Norman Ribbens",                
                "Roger Small",
                "Miles Thake",
                "Phil Trapper",
                "Peter Ulbright",
                "Mary Wicker",
                "Simon Yack"
            ]
        }
    }
}
</script>
