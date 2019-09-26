<template>
    <div>
        <vx-card title="References Received" title-color="primary" subtitle="All references listed below have been completed and are ready to share. ">
            <hr style="border: 1px solid #ccc"/>
            <table>
                <thead>
                    <tr>
                        <th>Request ID</th>
                        <th>Type</th>
                        <th class="name-column">Name</th>
                        <th>Accepted</th>
                        <th>Last Activity</th>
                        <th>Thanks</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            123456
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                            John Doe
                        </td>
                        <td>
                            09/01/2019 08:09 AM
                        </td>
                        <td>
                            09/02/2019 12:33 PM
                        </td>
                        <td>None</td>
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>
                            <vs-button size="small" class="ml-1" color="success">Send Thanks</vs-button>
                            
                        </td>                    
                    </tr>
                     <tr>
                        <td>
                            123456
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                            Jane Doe
                        </td>
                        <td>
                            09/02/2019 11:22 AM
                        </td>
                        <td>
                            09/02/2019 11:22 AM
                        </td>
                        <td>Sent</td>
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>                            
                            
                        </td>                    
                    </tr>
                     <tr>
                        <td>
                            123456
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                            Debbie Gibson
                        </td>
                        <td>
                            09/01/2019 08:09 AM
                        </td>
                        <td>
                            09/02/2019 12:33 PM
                        </td>
                        <td>None</td>
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>
                            <vs-button size="small" class="ml-1" color="success">Send Thanks</vs-button>
                            <vs-button size="small" class="ml-1" color="warning">Direct Communication</vs-button>                            
                        </td>                    
                    </tr>
                     <tr>
                        <td>
                            123456
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                            Michael Henriquez
                        </td>
                        <td>
                            09/01/2019 08:09 AM
                        </td>
                        <td>
                            09/02/2019 12:33 PM
                        </td>
                        <td>None</td>
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>
                            <vs-button size="small" class="ml-1" color="success">Send Thanks</vs-button>
                            
                        </td>                    
                    </tr>
                     <tr>
                        <td>
                            212322
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                            Susan Fields
                        </td>
                        <td>
                            09/01/2019 08:09 AM
                        </td>
                        <td>
                            09/02/2019 12:33 PM
                        </td>
                        <td>None</td>
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>
                            <vs-button size="small" class="ml-1" color="success">Send Thanks</vs-button>
                            
                        </td>                    
                    </tr>
                     <tr>
                        <td>
                            212322
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                            James Brown
                        </td>
                        <td>
                            09/01/2019 08:09 AM
                        </td>
                        <td>
                            09/02/2019 12:33 PM
                        </td>
                        <td>Sent</td>
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>                            
                            <vs-button size="small" class="ml-1" color="warning">Direct Communication</vs-button>
                        </td>                    
                    </tr>
                     <tr>
                        <td>
                            212322
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                            Kate Singleton
                        </td>
                        <td>
                            09/01/2019 08:09 AM
                        </td>
                        <td>
                            09/02/2019 12:33 PM
                        </td>
                        <td>None</td>
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>
                            <vs-button size="small" class="ml-1" color="success">Send Thanks</vs-button>
                            
                        </td>                    
                    </tr>
                     <tr>
                        <td>
                            212322
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                            Patrick Maholmes
                        </td>
                        <td>
                            09/01/2019 08:09 AM
                        </td>
                        <td>
                            09/02/2019 12:33 PM
                        </td>
                        <td>None</td>
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>
                            <vs-button size="small" class="ml-1" color="success">Send Thanks</vs-button>
                            <vs-button size="small" class="ml-1" color="warning">Direct Communication</vs-button>
                        </td>                    
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="7">
                            <hr class="mt-5" style="border: 1px solid #ccc"/>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </vx-card>
        
    </div>
</template>

<script>
export default {
    name: 'received-requests'
}
</script>
<style scoped>
    table { 
        width: 100%;
        border: 1px;
    }
    th {
        text-align: center;
        height: 50px;
        padding: 5px;
    }
    td {
        text-align: center;
        padding: 5px;
    }
    .button-column {
        text-align: left;        
    }
    .name-column {
        text-align: left;
    }
</style>

