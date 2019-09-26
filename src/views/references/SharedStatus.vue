<template>
    <div>
         <vx-card title="Shared Reference Status" title-color="primary" subtitle="All references listed below have been shared with external contacts. ">
            <hr style="border: 1px solid #ccc"/>
            <table>
                <thead>
                    <tr>
                        <th>Shared ID</th>
                        <th>Type</th>
                        <th class="name-column">Shared With</th>
                        <th class="name-column">Name</th>
                        <th>Sent</th>
                        <th>Received</th>                       
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            2342343
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                            Jeff Bezos (Amazon)
                        </td>
                        <td class="name-column">
                            David Crokett
                        </td>
                        <td>
                            09/01/2019 08:09 AM
                        </td>
                        <td>
                            <p class="text-danger">Pending</p>
                        </td>
                        
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>
                            
                            
                        </td>                    
                    </tr>
                     <tr>
                        <td>
                            2342343
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                            Jeff Bezos (Amazon)
                        </td>
                        <td class="name-column">
                            Chris Faulhaber
                        </td>
                        <td>
                            09/01/2019 08:09 AM
                        </td>
                        <td>
                            <p class="text-danger">Pending</p>
                        </td>
                        
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>                            
                            
                        </td>                    
                    </tr>
                     <tr>
                        <td>
                            2342343
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                            Jeff Bezos (Amazon)
                        </td>
                        <td class="name-column">
                            Derek Strickland
                        </td>
                        <td>
                           09/01/2019 08:09 AM
                        </td>
                        <td>
                             <p class="text-danger">Pending</p>
                        </td>
                        
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>
                            
                                                        
                        </td>                    
                    </tr>
                     <tr>
                        <td>
                            2342343
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                            Jeff Bezos (Amazon)
                        </td>
                        <td class="name-column">
                            James Franco
                        </td>
                        <td>
                            09/01/2019 08:09 AM
                        </td>
                        <td>
                            <p class="text-danger">Pending</p>
                        </td>
                        
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>
                            
                            
                        </td>                    
                    </tr>
                     <tr>
                        <td>
                            2342349
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                            Tim Cloud (PRU)
                        </td>
                        <td class="name-column">
                            Dennis Miller
                        </td>
                        <td>
                            09/01/2019 08:09 AM
                        </td>
                        <td>
                            09/02/2019 12:33 PM
                        </td>
                        
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>
                            
                            
                        </td>                    
                    </tr>
                     <tr>
                        <td>
                            2342349
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                           Tim Cloud (PRU)
                        </td>
                        <td class="name-column">
                            Jessica Simpson
                        </td>
                        <td>
                            09/01/2019 08:09 AM
                        </td>
                        <td>
                            09/02/2019 12:33 PM
                        </td>
                        
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>                            
                            
                        </td>                    
                    </tr>
                     <tr>
                        <td>
                            2342349
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                            Tim Cloud (PRU)
                        </td>
                        <td class="name-column">
                            Peggy Flemming
                        </td>
                        <td>
                            09/01/2019 08:09 AM
                        </td>
                        <td>
                            09/02/2019 12:33 PM
                        </td>
                        
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>
                            
                            
                        </td>                    
                    </tr>
                     <tr>
                        <td>
                            2342349
                        </td>
                        <td>
                            Text
                        </td>
                        <td class="name-column">
                            Tim Cloud (PRU)
                        </td>
                        <td class="name-column">
                            Ron Barber
                        </td>
                        <td>
                            09/01/2019 08:09 AM
                        </td>
                        <td>
                            09/02/2019 12:33 PM
                        </td>
                        
                        <td class="button-column">
                            <vs-button size="small">View</vs-button>
                            
                            
                        </td>                    
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="9">
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
    name: 'shared-status'
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

