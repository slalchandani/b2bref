<template>
    <div>
        <vx-card title-color="primary" title="Step 3 of 4: Please select your stored References to share">
            <div style="text-align:center">
                <p class="text-danger">
                    <b>Validate Number Of References Required Against Number of References Available For Selected Reference Type</b><br/>
                    If validation fails, alert subscriber and provide opportunity to adjust and save open "Share Session".
                </p>
                <p class="mt-4">
                    <u>Adjust Options are as follows:</u>
                    <ol>
                        <li>
                           1. Go Back to Step 2 and reduce # of references to share to match availability and continue.
                        </li>
                        <li>
                            2. Save Session and initiate new reference request session to collect deficit references. <br/>- once received, this share Session
                            may be acccessed to resume.  <br/>Saved Share Sessions will automatically expire after 10 business days (controlled in settings).
                        </li>
                    </ol>
                </p>
            </div>            
        </vx-card>
        <vx-card class="mt-5" title="Select 3 Reference Providers from Contact List" subtitle="At conclusion of share, each contact will be notified of intent to share their reference with details on whom to expect further communication from">
            <p>
                Listing of Available References (based on Reference Type request)<br/>
                Tag 3 Reference Providers, selection will appear below. 
            </p>
            <table>
                <thead class="bg-primary text-white">
                    <tr>
                        <th>Reference</th>
                        <th>Provided On</th>
                        <th>Age</th>
                        <th>Private Note</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>09/02/2019 02:33 PM</td>
                        <td>6 Days</td>
                        <td>
                            <vs-textarea placeholder="private note goes here"></vs-textarea>
                        </td>
                        <td>
                            <vs-button size="small">View</vs-button>
                            <vs-button class="ml-2" size="small" color="danger">Remove</vs-button>
                        </td>
                    </tr>
                    <tr>
                        <td>Davy Crockett</td>
                        <td>09/02/2019 02:33 PM</td>
                        <td>6 Days</td>
                        <td>
                            <vs-textarea placeholder="private note goes here"></vs-textarea>
                        </td>
                        <td>
                            <vs-button size="small">View</vs-button>
                            <vs-button class="ml-2" size="small" color="danger">Remove</vs-button>
                        </td>
                    </tr>
                    <tr>
                        <td>Andrew Jackson</td>
                        <td>09/02/2019 02:33 PM</td>
                        <td>6 Days</td>
                        <td>
                            <vs-textarea placeholder="private note goes here"></vs-textarea>
                        </td>
                        <td>
                            <vs-button size="small">View</vs-button>
                            <vs-button class="ml-2" size="small" color="danger">Remove</vs-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </vx-card>
        <router-link to="/references/share/3">
            <vs-button class="mt-3" color="primary">
                Save & Continue
            </vs-button>
        </router-link>
    </div>
</template>
<script>
export default {
    name: "share-reference2"
}
</script>
<style scoped>
    table { 
        width: 100%;
    }
    th {
        text-align: center;
        height: 45px;
        padding: 5px;
    }
    td {
        text-align: center;
        padding: 2px;
    }
    .button-column {
        text-align: left;        
    }
    .name-column {
        text-align: left;
    }
</style>
