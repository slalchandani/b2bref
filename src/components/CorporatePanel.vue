<template>
    <vs-row class="mt-6 ml-4 mr-4">
        <vx-card class="bg-primary">
            <div class="text-white">
                <b>Information Panel</b>
            </div>
            <div class="float-right mb-4" style="margin-top:-25px">
                <vs-button @click="togglePanel" radius color="#10163a" icon-pack="feather" icon="icon-chevron-down" size="small"></vs-button>
            </div>
            <transition name="fade" mode="out-in">
                <vs-row v-if="displayPanel">
                    <vs-col class="m-0 p-1" vs-lg="4" vs-sm="12" vs-xs="12">
                        <vx-card title="Private Note for John Doe" title-color="primary">
                            <p>
                                Please emphasize my great character strengths and my honesty.
                                I am hoping you can get to this quick so I can secure the sale.
                            </p>
                        </vx-card>
                    </vs-col>
                    <vs-col class="m-0 p-1" vs-lg="4" vs-sm="12" vs-xs="12">
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
                    <vs-col class="m-0 p-1" vs-lg="4" vs-sm="12" vs-xs="12">
                        <vx-card title="View Sonic Services" title-color="primary">
                            <p>Services offered by ViewSonic could be listed here.</p>
                        </vx-card>
                    </vs-col>
                </vs-row>
            </transition>

        </vx-card>            
    </vs-row>
</template>
<script>
export default {
    name: 'corporate-panel',
    data() {
        return {
            displayPanel: true
        }
    },
    methods: {
        togglePanel() {
            this.displayPanel = !this.displayPanel;
        }
    }
}
</script>
