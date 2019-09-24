<template>
    <vs-row class="mt-2">
        <vs-col class="m-0 p-1" vs-lg="4" vs-sm="12" vs-xs="12">
            <vx-card title="Private Note from Same Elliot" title-color="primary">
                <p>
                   Jeff, thanks for the opportunity. I trust you will find my references fully supportive of our discussed agreement in moving forward with our business relationship.
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
</template>
<script>

export default {
    name: 'overview-panel',
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
