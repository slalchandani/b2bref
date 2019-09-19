<template>
    <div>      
        <!-- <div class="btn-group my-3 z-40 flex-end">
            <vs-button size="small" color="primary" type="filled">Send Thanks</vs-button>
            <vs-button class="ml-1" size="small" color="primary" type="filled">Thanks Sent</vs-button>
            <vs-button class="ml-1" size="small" color="primary" type="filled">Direct Communication</vs-button>
            <vs-button class="ml-1" size="small" color="primary" type="filled">Remind</vs-button>
            <vs-button class="ml-1" size="small" color="primary" type="filled">View</vs-button>
        </div>   -->
        <vx-card title="New Reference Request Status" title-color="primary" subtitle="You will be notified of any new activity">
            
            <h5 class="text-primary">Open Reference Requests</h5>
            <div class="vx-row">
                <div class="vx-col md:w-1/3 w-full mt-5">
                    <vx-card title="Reference ID: 2 (sent 8/30/2019, 8:00am)" subtitle="Seeking a new contact with a not-for-profit" title-color="primary">
                        <p>
                            <b>Reference Type: </b> Text
                        </p>
                        <table class="table w-full table-auto my-2" style="border: solid 1px #ccc">
                            <thead>
                                <tr>
                                    <th width="40%" class="bg-primary text-white p-2">Primary 1</th>
                                    <th class="p-2 text-lg text-primary">John Doe</th>
                                </tr>                                
                            </thead>
                            <tbody class="text-sm">
                                <tr>
                                    <td class="p-1">Accepted:</td>
                                    <td class="p-1">09/01/2019 08:09 AM</td>
                                </tr>
                                <tr>
                                    <td class="p-1">Last Activity:</td>
                                    <td class="p-1">09/02/2019 12:33 PM</td>
                                </tr>
                                <tr>
                                    <td class="p-1">Progress</td>
                                    <td class="p-1 text-success">80%</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>                                    
                                    <td colspan="2" class="p-1">
                                        <vs-button size="small" color="primary" type="filled">View</vs-button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <table class="table w-full table-auto my-2" style="border: solid 1px #ccc">
                            <thead>
                                <tr>
                                    <th width="40%" class="bg-primary text-white p-2">Primary 2</th>
                                    <th class="p-2 text-lg text-primary">Debbie Gibson</th>
                                </tr>                                
                            </thead>
                            <tbody class="text-sm">
                                <tr>
                                    <td class="p-1">Accepted:</td>
                                    <td class="p-1">08/31/2019 06:05 AM</td>
                                </tr>
                                <tr>
                                    <td class="p-1">Last Activity:</td>
                                    <td class="p-1">08/31/2019 08:27 AM</td>
                                </tr>
                                <tr>
                                    <td class="p-1">Progress</td>
                                    <td class="p-1 text-success">COMPLETED</td>
                                </tr>
                            </tbody>
                             <tfoot>
                                <tr>                                    
                                    <td colspan="2">
                                        <div class="btn-group">
                                             <vs-button size="small" color="primary" type="filled">View</vs-button>
                                            <vs-button class="ml-1" size="small" color="primary" type="filled">Send Thanks</vs-button>
                                            <vs-button class="ml-1" size="small" color="primary" type="filled">Direct Communication</vs-button>
                                        </div>                                       
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <table class="table w-full table-auto my-2" style="border: solid 1px #ccc">
                            <thead>
                                <tr>
                                    <th width="40%" class="bg-primary text-white p-2">Primary 3</th>
                                    <th class="p-2 text-lg text-primary">Susan Fields</th>
                                </tr>                                
                            </thead>
                            <tbody class="text-sm">
                                <tr>
                                    <td class="p-1">Declined:</td>
                                    <td class="p-1">08/30/2019 11:05 AM</td>
                                </tr>
                                <tr>
                                    <td class="p-1"></td>
                                    <td class="p-1">
                                        <vs-button color="warning" size="small">Add Backup</vs-button>                                        
                                    </td>
                                </tr>   
                                <tr>
                                    <td class="p-1"></td>
                                    <td class="p-1">Added 08/31/2019 03:06 PM</td>
                                </tr>                            
                            </tbody>
                        </table>
                        <table class="table w-full table-auto" style="border: solid 1px #ccc">
                            <thead>
                                <tr>
                                    <th width="40%" class="bg-danger text-white p-2">Backup 1</th>
                                    <th class="p-2 text-lg text-danger">Jill Beckwith</th>
                                </tr>                                
                            </thead>
                            <tbody class="text-sm">
                                <tr>
                                    <td class="p-1">Accepted:</td>
                                    <td class="p-1">08/31/2019 04:32 PM</td>
                                </tr>
                                <tr>
                                    <td class="p-1">Last Activity</td>
                                    <td class="p-1">
                                        09/02/2019 07:33 PM
                                    </td>
                                </tr>    
                                <tr>
                                    <td class="p-1">Progress</td>
                                    <td class="p-1 text-success">30%</td>
                                </tr>                           
                            </tbody>
                        </table>                        
                    </vx-card>
                </div>
                <div class="vx-col md:w-1/3 w-full mt-5">
                    <vx-card title="Reference ID: 1 (sent 07/29/2019 5:27pm)" subtitle="Need to provide customer testimonials for RFP" title-color="primary">
                        <p>
                            <b>Reference Type: </b> Video
                        </p>
                        <table class="table w-full table-auto my-2" style="border: solid 1px #ccc">
                            <thead>
                                <tr>
                                    <th width="40%" class="bg-primary text-white p-2">Primary 1</th>
                                    <th class="p-2 text-lg text-primary">Matt Smith</th>
                                </tr>                                
                            </thead>
                            <tbody class="text-sm">
                                <tr>
                                    <td class="p-1">Accepted:</td>
                                    <td class="p-1">08/01/2019 08:09 AM</td>
                                </tr>
                                <tr>
                                    <td class="p-1">Last Activity:</td>
                                    <td class="p-1">08/02/2019 12:33 PM</td>
                                </tr>
                                <tr>
                                    <td class="p-1">Progress</td>
                                    <td class="p-1 text-success">COMPLETED (58 secs)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td class="text-success p-1">
                                        Thanks Sent!
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="2" class="p-1">
                                        <vs-button size="small" color="primary" type="filled">View</vs-button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <table class="table w-full table-auto my-2" style="border: solid 1px #ccc">
                            <thead>
                                <tr>
                                    <th width="40%" class="bg-primary text-white p-2">Primary 2</th>
                                    <th class="p-2 text-lg text-primary">Jeremiah Jones</th>
                                </tr>                                
                            </thead>
                            <tbody class="text-sm">
                                <tr>
                                    <td class="p-1">Accepted:</td>
                                    <td class="p-1">07/31/2019 06:05 AM</td>
                                </tr>
                                <tr>
                                    <td class="p-1">Last Activity:</td>
                                    <td class="p-1">07/31/2019 08:27 AM</td>
                                </tr>
                                <tr>
                                    <td class="p-1">Progress</td>
                                    <td class="p-1 text-success">COMPLETED (45 secs)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td class="text-success p-1">
                                        Thanks Sent!
                                    </td>
                                </tr>
                            </tbody>
                             <tfoot>
                                <tr>
                                    <td colspan="2" class="p-1">
                                        <div class="btn-group">
                                            <vs-button size="small" color="primary" type="filled">View</vs-button>
                                            <vs-button class="ml-1" size="small" color="primary" type="filled">Direct Communication</vs-button>
                                        </div>                                        
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <table class="table w-full table-auto my-2" style="border: solid 1px #ccc">
                            <thead>
                                <tr>
                                    <th width="40%" class="bg-primary text-white p-2">Primary 3</th>
                                    <th class="p-2 text-lg text-primary">Ron Russel</th>
                                </tr>                                
                            </thead>
                            <tbody class="text-sm">
                                <tr>
                                    <td class="p-1">Accepted:</td>
                                    <td class="p-1">07/31/2019 04:32 PM</td>
                                </tr>
                                <tr>
                                    <td class="p-1">Last Activity:</td>
                                    <td class="p-1">
                                        07/02/2019 07:33 PM                                        
                                    </td>
                                </tr>   
                                <tr>
                                    <td class="p-1">Progress:</td>
                                    <td class="p-1 text-danger">PENDING SUBMISSION</td>
                                </tr>                            
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="2" class="p-1">
                                        <vs-button size="small" color="danger" type="filled">Reminder Recommended</vs-button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        
                    </vx-card>
                </div>      
                <div class="vx-col md:w-1/3 w-full mt-5">                    
                    <vx-card>
                        <div class="bg-primary text-white">
                            <p style="padding:10px">
                            <b>B2BRef</b> will monitor all activity from Reference Providers while allowing you view more details – you can see who accepted or  declined your request.
                            </p>
                            <p style="padding: 10px">
                                In cases where a reference provider declines your request you can add a backup reference provider, as illustrated in Reference ID 2, hence the reason for the ‘Add Backup’ button appearing in a disabled state, since the scenario represents the post backup view.
                            </p>
                            <p style="padding: 10px">
                                You can also view their progress and send reminders if response thresholds are breached.
                            </p>
                        </div>
                        <div class="bg-primary text-white my-10">
                            <p style="padding: 10px">
                                Contacts that declined will receive an auto-response that thanks them for their consideration and ends the conversation politely.
                            </p>
                        </div>
                    </vx-card>
                    
                </div>          
            </div>
        </vx-card>
        <vs-button class="my-5">
            View More...
        </vs-button>
    </div>
</template>

<script>
export default {
    name: 'ManageReference'
}
</script>

