<template>
    <div>
        <vs-row>
            <vs-col vs-lg="5" vs-sm="6" vs-xs="12">
                <vx-card
                    title="Login and Security"
                    title-color="primary"
                    subtitle="Change your password and configure multi-factor authentication"
                >
                    <vs-input
                        type="password"
                        icon="icon icon-lock"
                        icon-pack="feather"
                        label-placeholder="New Password"
                        v-model="password"
                        class="w-full mt-6 no-icon-border"/>

                    <vs-input
                        type="password"
                        icon="icon icon-unlock"
                        icon-pack="feather"
                        label-placeholder="Verify Password"
                        v-model="verifyPassword"
                        class="w-full mt-6 no-icon-border"/>

                    <vs-button style="margin-top:25px" type="filled">Change Password</vs-button>
                    
                    <hr style="margin:25px"/>

                    <ul class="switch-container">
                        <li>
                            <label>Multifactor Authentication</label>
                            <vs-switch v-model="enableMultifactor"></vs-switch>
                        </li>
                    </ul>
                    <div class="text-primary text-sm" style="margin-top:15px">Verification Method</div>
                    <v-select style="margin-top:5px" class="w-full" placeholder="- Select Verification Type -" :options="['Email', 'Text']"></v-select>
                    <vs-button style="margin-top:25px" type="filled">Enable</vs-button>
                </vx-card>



            </vs-col>
            <vs-col vs-lg="5" vs-sm="6" vs-xs="12">
                <vx-card
                    title="Subscription and Payments"
                    title-color="primary"
                    subtitle="Manage your B2BREF subscription">
                    <div class="text-primary text-sm">Subscription Type</div>
                    <v-select style="margin-top:4px" class="w-full" placeholder="- No Active Subscription -" :options="['Corporate', 'Small Business']"></v-select>
                    
                    <hr style="margin:25px"/>

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
                        <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Billing Zip Code" v-model="billingZip" />
                        </div>
                    </div>

                    <div class="vx-row mb-2">
                        <div class="vx-col w-full">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Card Number" v-model="cardNumber" />
                        </div>
                    </div>

                    <div class="vx-row mb-2">
                        <div class="vx-col w-full">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Expiration Date (MM/YY)" v-model="expirationDate" />
                        </div>
                    </div>

                    <div class="vx-row mb-2">
                        <div class="vx-col w-full">
                        <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Security Code (CVV)" v-model="securityCode" />
                        </div>
                    </div>

                    <vs-button style="margin-top:25px" type="filled">Apply Changes</vs-button>
                    <vs-button style="margin-top:25px;margin-left: 17px" color="warning" type="filled">Switch Method</vs-button>
                </vx-card>
            </vs-col>
        </vs-row>
        
    </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
    name: 'account',
    data() {
        return {
            password: "",
            verifyPassword: "",
            enableMultifactor: false,
            firstName: 'Sanj',
            lastName: 'Lalchandani',
            billingZip: '33173',
            cardNumber: "****-****-****-1010",
            expirationDate: "10/21",
            securityCode: "555"
        }
    },
    components: {
        'v-select': vSelect
    }
}
</script>

