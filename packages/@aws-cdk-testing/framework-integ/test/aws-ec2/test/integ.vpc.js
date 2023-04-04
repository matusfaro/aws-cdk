"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const ec2 = require("aws-cdk-lib/aws-ec2");
const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-ec2-vpc');
const vpc = new ec2.Vpc(stack, 'MyVpc');
// Test Security Group Rules
const sg = new ec2.SecurityGroup(stack, 'SG', { vpc });
const rules = [
    ec2.Port.icmpPing(),
    ec2.Port.icmpType(128),
    ec2.Port.allIcmp(),
    ec2.Port.allUdp(),
    ec2.Port.udp(123),
    ec2.Port.udpRange(800, 801),
];
for (const rule of rules) {
    sg.addIngressRule(ec2.Peer.anyIpv4(), rule);
}
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcudnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZWcudnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDJDQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFFcEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUV4Qyw0QkFBNEI7QUFDNUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBRXZELE1BQU0sS0FBSyxHQUFHO0lBQ1osR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7SUFDbkIsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO0lBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0lBQ2xCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO0lBQ2pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzVCLENBQUM7QUFFRixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtJQUN4QixFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDN0M7QUFFRCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgZWMyIGZyb20gJ2F3cy1jZGstbGliL2F3cy1lYzInO1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuY29uc3Qgc3RhY2sgPSBuZXcgY2RrLlN0YWNrKGFwcCwgJ2F3cy1jZGstZWMyLXZwYycpO1xuXG5jb25zdCB2cGMgPSBuZXcgZWMyLlZwYyhzdGFjaywgJ015VnBjJyk7XG5cbi8vIFRlc3QgU2VjdXJpdHkgR3JvdXAgUnVsZXNcbmNvbnN0IHNnID0gbmV3IGVjMi5TZWN1cml0eUdyb3VwKHN0YWNrLCAnU0cnLCB7IHZwYyB9KTtcblxuY29uc3QgcnVsZXMgPSBbXG4gIGVjMi5Qb3J0LmljbXBQaW5nKCksXG4gIGVjMi5Qb3J0LmljbXBUeXBlKDEyOCksXG4gIGVjMi5Qb3J0LmFsbEljbXAoKSxcbiAgZWMyLlBvcnQuYWxsVWRwKCksXG4gIGVjMi5Qb3J0LnVkcCgxMjMpLFxuICBlYzIuUG9ydC51ZHBSYW5nZSg4MDAsIDgwMSksXG5dO1xuXG5mb3IgKGNvbnN0IHJ1bGUgb2YgcnVsZXMpIHtcbiAgc2cuYWRkSW5ncmVzc1J1bGUoZWMyLlBlZXIuYW55SXB2NCgpLCBydWxlKTtcbn1cblxuYXBwLnN5bnRoKCk7XG4iXX0=