<template>
    <div>
        <vs-row>
            <vs-col vs-lg="8" vs-sm="12" vs-xs="12">
                <vx-card title="New Reference Request" title-color="primary" subtitle="Use area below to enter contact information">
                    <h4>Summary</h4>
                    <b>Please confirm your new reference request</b>

                    <b>Purpose of Reference</b> <vs-button size="small" class="ml-5">Edit</vs-button>
                    <br/>
                    <div class="text-warning">
                        Responding to New Client Request for References
                    </div> 
                    
                </vx-card>
                <vx-card class="mt-5">
                    <vs-tabs :color="colorx">
                        <vs-tab @click="colorx = 'success'" label="Primary 1" icon-pack="feather" icon="icon-user">                            
                            <contact-form/>           
                            <hr class="mt-5 mb-5" />
                            <b>Private Note To Reference Contact</b><br/>
                            <p>
                                <vs-textarea placeholder="Please emphasize my great character strengths and my honesty. I am hoping you can get to this quick so I can secure this sale. ">
                                    
                                </vs-textarea>
                            </p>     
                            <hr class="mt-5 mb-5"/>
                            Text Reference <vs-checkbox></vs-checkbox>           
                        </vs-tab>
                        <vs-tab @click="colorx = 'success'" label="Primary 2" icon-pack="feather" icon="icon-user">
                            <contact-form/>           
                            <hr class="mt-5 mb-5" />
                            <b>Private Note To Reference Contact</b><br/>
                            <p>
                                <vs-textarea placeholder="Please emphasize my great character strengths and my honesty. I am hoping you can get to this quick so I can secure this sale. ">
                                    
                                </vs-textarea>
                            </p>     
                            <hr class="mt-5 mb-5"/>
                            Text Reference <vs-checkbox></vs-checkbox>
                        </vs-tab>
                        <vs-tab @click="colorx = 'success'" label="Primary 3" icon-pack="feather" icon="icon-user">
                            <contact-form/>           
                            <hr class="mt-5 mb-5" />
                            <b>Private Note To Reference Contact</b><br/>
                            <p>
                                <vs-textarea placeholder="Please emphasize my great character strengths and my honesty. I am hoping you can get to this quick so I can secure this sale. ">
                                    
                                </vs-textarea>
                            </p>     
                            <hr class="mt-5 mb-5"/>
                            Text Reference <vs-checkbox></vs-checkbox>
                        </vs-tab>
                        <vs-tab @click="colorx = 'danger'" label="Backup 1" icon-pack="feather" icon="icon-user">
                            <contact-form/>           
                            <hr class="mt-5 mb-5" />
                            <b>Private Note To Reference Contact</b><br/>
                            <p>
                                <vs-textarea placeholder="Please emphasize my great character strengths and my honesty. I am hoping you can get to this quick so I can secure this sale. ">
                                    
                                </vs-textarea>
                            </p>     
                            <hr class="mt-5 mb-5"/>
                            Text Reference <vs-checkbox></vs-checkbox>
                        </vs-tab>
                        <vs-tab @click="colorx = 'danger'" label="Backup 2" icon-pack="feather" icon="icon-user">
                            <contact-form/>           
                            <hr class="mt-5 mb-5" />
                            <b>Private Note To Reference Contact</b><br/>
                            <p>
                                <vs-textarea placeholder="Please emphasize my great character strengths and my honesty. I am hoping you can get to this quick so I can secure this sale. ">
                                    
                                </vs-textarea>
                            </p>     
                            <hr class="mt-5 mb-5"/>
                            Text Reference <vs-checkbox></vs-checkbox>
                        </vs-tab>
                    </vs-tabs>
                </vx-card>
                <div>
                    <vs-button class="mt-5">
                        Confirm and Send All Requests
                    </vs-button>
                </div>
            </vs-col>
            <vs-col vs-lg="4" vs-sm="12" vs-xs="12">
                <vx-card title="Tips" title-color="primary">
                    <p>
                        Confirm your selection and watch for response activity in your notifications.
                    </p>
                </vx-card>
                <vx-card title="Next Steps" class="mt-10">
                    <p>
                        <b>B2BRef</b> will collect each of your reference provider's preferred contact
                        method and best time for phone call (if elected).
                    </p>
                    <p class="mt-5">
                        When you share references provided by your contacts, you may alert them on whom to
                        expect contact from.
                    </p>
                    <p class="mt-5">
                        <b>
                            Reference collection process will involve Blockchain technology.
                        </b>
                    </p>
                </vx-card>
            </vs-col>
        </vs-row>
    </div>
</template>
<script>
import ContactFrom from '@/components/Form.vue';

export default {
    name: 'reference-request-summary',
    data:() => ({
        colorx: 'success'
    }),
    components: {
        "contact-form" : ContactFrom
    }
    
}
</script>
