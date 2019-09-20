<template>
    <div>
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
            <vs-input class="w-full" icon-pack="feather" icon="icon-tag" icon-no-border label-placeholder="Education" v-model="education" />
            </div>
        </div>    
    </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
    name: 'Contact-Form',
    components: {
        'v-select': vSelect,
    }
}
</script>
