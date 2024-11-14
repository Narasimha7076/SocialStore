import React from "react";

function Component(){
    return (
        <div>
             <h1>Dashboard</h1>
            <div class="insights">
                <div class="sales">
                    <span class="material-symbols-outlined">trending_up</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Total Sales</h3>
                            <h1>$25,023</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle r="30" cy="40" cx="40"></circle>
                            </svg>
                            <div class="number">80%</div>
                        </div>
                    </div>
                    <small>Last 24 hours</small>
                </div>

                <div class="expenses">
                    <span class="material-symbols-outlined">local_mall</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Expenses</h3>
                            <h1>$5,004</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle r="30" cy="40" cx="40"></circle>
                            </svg>
                            <div class="number">20%</div>
                        </div>
                    </div>
                    <small>Last 24 hours</small>
                </div>

                <div class="income">
                    <span class="material-symbols-outlined">stacked_line_chart</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Income</h3>
                            <h1>$20,018</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle r="30" cy="40" cx="40"></circle>
                            </svg>
                            <div class="number">80%</div>
                        </div>
                    </div>
                    <small>Last 24 hours</small>
                </div>
            </div>

            <div class="recent-order">
                <h1>Recent Listings</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Number</th>
                            <th>Payments</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mini USB</td>
                            <td>456</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Sceptre Curved</td>
                            <td>119</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Razer Blackshark</td>
                            <td>30</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Razer Basilisk V3</td>
                            <td>40</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Component;