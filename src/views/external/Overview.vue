<template>
    <div>
        <div class="vx-row">
            <div class="vx-col md:w-2/3 w-full">
                <vx-card title="References Provided By: Sam Elliot" title-color="primary" subtitle="Secured URL will contain the following: ReferenceRequestID, ReferenceRequestContactId">            
                    <p>
                        Hello Jeff Bezos,
                    </p>
                    <p class="mt-5">
                        Sam Elliot from View Sonic has provided you with 3 references for his organization.  Please refer to the 
                        instructions for assistance.
                    </p>
                    <p>
                        All references provided may be downloaded as a report package.
                    </p>
                    <p class="mt-5">
                        Thanks for your consideration,
                    </p>
                    <p class="mt-5">
                        <b>B2BRef.com</b>
                    </p>                        
                </vx-card>
            </div>
            <div class="vx-col md:w-1/3 w-full">
                <vx-card title="Instructions" title-color="primary">
                    <div class="instructions">
                        This is where instructions will go.
                    </div>
                </vx-card>
            </div>
        </div>
        <overview-panel/>
        <vs-table stripe :data="users" class="mt-3">
            <template slot="header">
            </template>
            <template slot="thead">
                <vs-th>Name</vs-th>
                <vs-th>Title</vs-th>
                <vs-th>Organization</vs-th>
                <vs-th>Provided On</vs-th>
                <vs-th>Age</vs-th>
                <vs-th>View</vs-th>
            </template>
            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].name">
                        <span v-if="data[indextr].isDirect">                            
                            <vs-icon round size="small" color="primary" icon="message-circle"></vs-icon>
                        </span>
                        <span class="ml-3">
                            {{ data[indextr].name }}
                        </span>                        
                    </vs-td>
                    <vs-td :data="data[indextr].title">
                        {{ data[indextr].title }}
                    </vs-td>
                    <vs-td :data="data[indextr].organization">
                        {{ data[indextr].organization }}
                    </vs-td>
                    <vs-td :data="data[indextr].providedOn">
                        {{ data[indextr].providedOn }}
                    </vs-td>
                    <vs-td :data="data[indextr].age">
                        {{ data[indextr].age }}
                    </vs-td>                   
                    <vs-td>
                        <router-link to="/external/details">
                            <vs-button size="small" radius color="primary" type="filled" icon-pack="feather" icon="icon-search"></vs-button>
                        </router-link>                        
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
        <vs-row class="mt-4 ml-10">
            <vs-icon round size="small" color="primary" icon="message-circle"></vs-icon>
            <span class="ml-3 note text-sm">
                Direct interaction is available with contacts displaying this icon, for further questions. View reference details to engage using contact preference methods available.
            </span>
        </vs-row>
        <vs-row class="mt-6">
            <vs-button>View Summary</vs-button>
            <vs-button class="ml-5">Download</vs-button>
        </vs-row>
    </div>
</template>
<script>
import OverviewPanel from '@/components/OverviewPanel.vue'
export default {
    name: 'external-overview',
    data: ()=>({
        users: [
            {
                id: 1,
                name: "John Doe",
                title: "COO",
                organization: "Apple, Inc",
                providedOn: "09/02/2019 02:33PM",
                age: "6 days",
                isDirect: false
            },
            {
                id: 2,
                name: "Debbie Gibson",
                title: "Senior VP",
                organization: "Sony Records",
                providedOn: "08/31/2019 08:27AM",
                age: "9 days",
                isDirect: true
            },
            {
                id: 3,
                name: "Jill Beckwith",
                title: "Managing Director",
                organization: "Coca Cola",
                providedOn: "09/02/2019 07:33PM",
                age: "6 days",
                isDirect: false
            }

        ]
    }),
    components: {
        'overview-panel': OverviewPanel
    }
}
</script>
<style scoped>
    .instructions {        
        min-height: 175px;        
        text-align: center;        
    }
    .note {
        font-style: italic;
    }
</style>


