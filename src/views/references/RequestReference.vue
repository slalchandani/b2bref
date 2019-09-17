<template>
    <div>
        <vx-row>
            <vx-col vs-lg="5" vs-sm="6" vs-xs="12">
                <vx-card title="Generate a new request for reference" title-color="primary" subtitle="Use the wizard below to submit reference requests to a single user or a group of users.">
                    <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit" @on-complete="formSubmitted">
                    <tab-content title="Step 1" class="mb-5">

                        <!-- tab 1 content -->
                        <div class="vx-row">
                            <vx-card title="Select Purpose of Reference">
                                <div class="vx-row mb-2">
                                    <div class="vx-col w-1/3">
                                        <div class="text-primary text-sm">Reference Purpose</div>
                                        <v-select class="w-full text-sm" placeholder="- Select Purpose -" :options="['Purpose 1', 'Purpose 2', 'Purpose 3', 'Purpose 4', 'Purpose 5']"></v-select>
                                    </div>
                                </div>
                            </vx-card>
                        </div>
                    </tab-content>

                    <!-- tab 2 content -->
                    <tab-content title="Step 2" class="mb-5">
                        <div class="vx-row">
                            <vx-card title="Select Number of Reference Providers">
                                <div class="vx-row ml-12"> 
                                    <p>
                                        <vs-input-number class="text-lg" min="1" max="25" v-model="providerCount"/>
                                    </p>                                    
                                </div>
                            </vx-card>
                        </div>
                    </tab-content>

                    <!-- tab 3 content -->
                    <tab-content title="Step 3" class="mb-5">
                        <div class="vx-row">
                            <vx-card title="Select Reference Type">
                                <div class="vx-row mb-2">
                                    <div class="vx-col w-1/3">
                                        <div class="text-primary text-sm">Reference Type</div>
                                        <v-select class="w-full text-sm" placeholder="- Select Type of Reference -" :options="['Text', 'Audio/Visual']"></v-select>
                                    </div>
                                </div>
                            </vx-card>
                        </div>
                    </tab-content>

                    <!-- tab 4 content -->
                    <tab-content title="Step 4" class="mb-5">                        
                        <div class="vx-row">
                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <div class="mx-auto">
                                    <vs-button class="ml-10">
                                        <div class="text-white bold">Select Reference From Contacts</div>
                                        <p class="text-sm">Select Contact from your contacts list</p>
                                    </vs-button>
                                    <vs-button color="warning" class="ml-5">
                                        <div class="text-white bold">
                                            Add New Reference Contact
                                        </div>
                                        <p class="text-sm">Use area below to enter contact information</p>
                                    </vs-button>
                                </div>        
                                <hr class="mt-5"/>                        
                                <vx-card>                                    
                                    <div class="vx-row mb-2">
                                        <div class="vx-col w-1/2">
                                            <div style="font-size:12pt" class="text-primary mt-5"><strong>Reference Contact Information</strong></div>
                                        </div>
                                        <div class="vx-col w-1/2">
                                            <div class="btn-group float-right">
                                                <vs-button style="font-size:14pt;font-weight:bold">&lt;</vs-button>
                                                <span class="ml-2 mr-2 text-primary">1 of 3</span>
                                                <vs-button style="font-size:14pt;font-weight:bold">&gt;</vs-button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="vx-row mb-2">
                                        <div class="vx-col w-full">
                                        <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Name" v-model="firstName" />
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
                                                <vs-input class="w-full" icon-pack="feather" icon="icon-phone" icon-no-border label-placeholder="Office #" v-model="office" />
                                            </vx-input-group>                        
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
                                            <vx-input-group>                                
                                                
                                                <vs-input class="w-full" icon-pack="feather" icon="icon-briefcase" icon-no-border label-placeholder="Job Title" v-model="jobTitle" />
                                            </vx-input-group>                        
                                        </div>
                                    </div> 
                                    <div class="vx-row mb-2">
                                        <div class="vx-col w-full">
                                            <vx-input-group>                                
                                                
                                                <vs-input class="w-full" icon-pack="feather" icon="icon-briefcase" icon-no-border label-placeholder="Organization" v-model="organization" />
                                            </vx-input-group>                          
                                        </div>
                                    </div> 
                                    <div class="vx-row mb-2">
                                        <div class="vx-col w-full">
                                            <vx-input-group>
                                                <vs-input class="w-full" icon-pack="feather" icon="icon-briefcase" icon-no-border label-placeholder="Industry" v-model="industry" />
                                            </vx-input-group>
                                        </div>
                                    </div>    
                                    <div class="vx-row mb-2">
                                        <div class="vx-col w-full">
                                        <vs-input class="w-full" icon-pack="feather" icon="icon-calendar" icon-no-border label-placeholder="Relationship" v-model="relationship" />
                                        </div>
                                    </div>
                                     <div class="vx-row mb-2">
                                        <div class="vx-col w-full">
                                        <vs-input class="w-full" icon-pack="feather" icon="icon-calendar" icon-no-border label-placeholder="Length of Relationship" v-model="relationship" />
                                        </div>
                                    </div>
                                    <div class="vx-row mb-2">
                                        <div class="vx-col w-full">
                                            <div class="text-primary text-sm mt-3">Private Note</div>
                                            <vs-textarea rows="5"></vs-textarea>
                                        </div>
                                    </div>
                                     
                                </vx-card>                                
                            </div>
                            <div class="vx-col md:w-1/2 w-full mt-5">
                                <vx-card title="Email Preview">
                                    <ul class="centerx">
                                        <li>
                                            <vs-radio v-model="emailType" vs-value="Preview">Preview (Auto)</vs-radio>
                                            <vs-radio class="ml-5" v-model="emailType" vs-value="Manual">Manual</vs-radio>
                                        </li>
                                    </ul>
                                    <quill-editor style="min-height: 700px" v-model="content"></quill-editor>
                                </vx-card>                                
                            </div>
                        </div>                        
                    </tab-content>
                </form-wizard>
                </vx-card>
                 
            </vx-col>
        </vx-row>
       
    </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import vSelect from 'vue-select'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  name: "request-reference",
  data() {
    return {
      firstName: "",
      lastName: "",
      purposes: [
          "Purpose One", "Purpose 2", "Purpose 3", "Purpose 4", "Purpose 5"
      ],
      providerCount: 1,
      emailType: 'Preview',
      content: "<html><head></head><body><p>Hi John,</p><br/><p>I'm using a cloud-based reference service, B2BRef, to collect references to share.</p><br/><p>Can I count on you to give me a favorable reference?  If so, please <a href='#'>click here</a> to accept.</p><br/><p>If you cannot help, that's okay too, please let me know by <a href='#'>clicking here</a>.</p><br/><br/><p>Thank you in advance for your help.</p><br/><p>Thanks,</p><p>Subscriber Name</p></body></html>"
    };
  },
  methods: {
    formSubmitted() {
      alert("Form submitted!");
    }
  },
  components: {
    FormWizard,
    TabContent,
    'v-select': vSelect,
    quillEditor
  }
};
</script>

