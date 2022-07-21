# TrendMicro Cloud One Workload Security Node-RED Client Nodes
[![Latest NPM Version](https://img.shields.io/npm/v/node-red-contrib-alarm.svg)](https://www.npmjs.com/package/@trendmicro-cloudone/node-red-workloadsecurity)
[![License](https://img.shields.io/github/license/Anamico/node-red-contrib-proofpoint.svg)](https://github.com/TrendAndrew/node-red-workloadsecurity/blob/master/LICENSE)
[![Donate](https://img.shields.io/badge/donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JUYN6NBFELTC2&source=url)

Node Red Nodes Implementing the Trend Micro CloudOne Workload Security APIs: https://cloudone.trendmicro.com/docs/workload-security/api-reference/

# Overview

Trend Micro CloudOne Workload Security

![List Computers Flow Example](https://github.com/TrendAndrew/node-red-cloudone/raw/master/images/example-listcomputers.png "List Computers Flow Example")

# Documentation

This library depends on the [@trendmicro-cloudone/node-red-core](https://flows.nodered.org/node/@trendmicro-cloudone/node-red-core) library for service configuration

## Flow examples

To GET all computers, use the "List Computers" node.

The nodes take input msgs to trigger the api calls, the msg.payload can typically have arguments to override the node settings, for instance you can pass in API arguments such as query strings, account ids, etc.

![List Computers Flow Example](https://github.com/TrendAndrew/node-red-cloudone/raw/master/images/example-listcomputers.png "List Computers Flow Example")

The node will provide status on the call and on the response content summary (in this example, how many computers were found).

The outgoing response msg includes the api output as the msg.payload.

## Working behind a proxy

See proxy notes under [@trendmicro-cloudone/node-red-core](https://flows.nodered.org/node/@trendmicro-cloudone/node-red-core).

# Bugs and Feedback

For bugs, questions and discussions please log/discuss here 
[GitHub Issues](https://github.com/TrendAndrew/node-red-workloadsecurity/issues).

# Donations [![Donate](https://img.shields.io/badge/donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JUYN6NBFELTC2&source=url)

If you would like to donate some money to support ongoing development or as a simple thank you for me sharing this project for others to use, please feel free to send money via
[PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JUYN6NBFELTC2&source=url).

# LICENSE

Copyright (c) 2018 Andrew Longhorn <Andrew_Longhorn@TrendMicro.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
