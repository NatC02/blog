---
title: Increasing Network Utilization
date: "2022-03-11"
description: "Increasing Frontend Performance by lowering latency"
---

This post will be in a deep dive into alot of the terminology of network utilization for a variety of performance gains in combination with the use of network variables. The first step of visiting any website is to check the domain name and validate through [DNS lookup](https://developer.mozilla.org/en-US/docs/Glossary/DNS), establish [TCP](https://developer.mozilla.org/en-US/docs/Glossary/TCP) connection, and do an [TLS handshake](https://developer.mozilla.org/en-US/docs/Glossary/SSL). These first three steps make every website visited secure (the little lock next to browser's URL) and is an internet protocol called Hyper Text Transfer Protocol **Secure** (HTTPS). This process makes bank payments secure and just about governs all of the web. But the setup described has travel time _to-and-from_ the client to the server.

This means that we need to talk about latency and a few key base terms when looking at network performance. [Bandwidth](https://developer.mozilla.org/en-US/docs/Glossary/Bandwidth) is the rate at which a connection receives packets in bits-per-second (bps) or megabits-per-second (Mbps) or gigabits-per-second (Gbps). [Round Trip Time](<https://developer.mozilla.org/en-US/docs/Glossary/Round_Trip_Time_(RTT)>) is the time it takes for a data packet to be received back to the client or the origin. Network round trips are NOT asynchronous and HAVE to first know the IP address before establishing TCP connection, then TCP is established and then the SSL setup begins.

Since 2022, TLS 1.3 (Latest TLS at the time of writing) provides better privacy and performance compared to TLS 1.2 and it shortens the Round Trips from two to one. The great thing is that with HTTP/1 or HTTP/2 this ultimately means that network utilization is faster by 33% because of the eliminated Round Trip.

<hr>

<img src="../../assets/increasing-network-utilization/TLSImprovementDiagram.jpg"/>

<br/>

HTTP/2 and HTTP/3 are better performing than HTTP/1.

# But what is HTTP, HTTP/1, HTTP/1.xx HTTP/2, HTTP/3 (QUIC)?

## The parameters of an HTTP Request

An HTTP Request takes in a URL, Method Type GET, POST, PUT, DELETE, [and more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

Request Headers (what type of content is being sent), some content that goes in the Headers of a request; Authentication, Caching, Client Hints (Personal favorite just in terms of potential web performance improvement), Cookies, [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Cross-Origin Resource Sharing), Hosts (for proxies), etc. Entire list [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

Certain method types have a Body requirement. For example, sending a GET REQUEST you don't need one, but for a POST you do because in the case of a login, you are writing to a database to place user login info. Or if an image is being uploaded, then a content-type of image is used. Then the user can upload an image.

With Client Hints you can use Adaptive Media Loading and send a Request Header to detect the width of a device to deliver the most performant image size and format through a CDN (Content Delivery Network) that supports Client Hints. We can now deliver content more suitable to different user devices and network conditions.

### [More use cases of Client Hints](https://addyosmani.com/blog/adaptive-loading/)

- Serving low-quality images & videos on slow networks
- Loading non-critical JavaScript for interactivity only on fast CPUs
- Throttling the frame-rate of Animations on low -end devices
- Avoiding computationally heavy operations on low-end devices
- Blocking 3rd-party scripts on slower devices

Some constraints we always work with are the Network, Memory, and CPU (Central Processing Unit) to deliver more accessible pages.

Practically, this means that a photo gallery could be delivered with low resolution previews, or coding the implementation less-demandingly (css only, no javascript). A search field that returns fewer values as a result, limiting media that weighs more, or reducing npm/yarn dependencies to implement a certain feature with less.

### React Hook for Adaptive Loading scenerios:

```js
// Since the return of saveData hook is true or false, we're simply checking whether the User has it enabled

import React from "react";

import { useSaveData } from "react-adaptive-hooks/save-data";

const MyComponent = () => {
  const { saveData } = useSaveData();
  return (
    <div>
      {saveData ? (
        <img src="..." />
      ) : (
        <video muted controls>
          ...
        </video>
      )}
    </div>
  );
};

// React Hook for adapting based on network status (2G, 3G, 4G)
// For a news site, if the speed is 2G you could decide to only display the MOST popular news
// For a car rental company, you could decide to showcase the car with an image instead of a video, unless the user clicks

import React from "react";

import { useNetworkStatus } from "react-adaptive-hooks/network";

const MyComponent = () => {
  const { effectiveConnectionType } = useNetworkStatus();

  let media;
  switch (effectiveConnectionType) {
    case "2g":
      media = <img src="medium-res.jpg" />;
      break;
    case "3g":
      media = <img src="high-res.jpg" />;
      break;
    case "4g":
      media = (
        <video muted controls>
          ...
        </video>
      );
      break;
    default:
      media = (
        <video muted controls>
          ...
        </video>
      );
      break;
  }

  return <div>{media}</div>;
};
```

## The parameters of an HTTP Response

So now the HTTP Request is sent but when it makes it's way back to the client (browser, web app) you will receive a HTTP Response. The response is comprised of a Status Code, Headers, and a Body.

The status code can return: 200 (OK), 201 (CREATED), 404 (URL NOT FOUND) [and more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Node, Apache and other servers take care of this for you. But if your writing your own server, you'd have to handle Status Codes.

## How does HTTP work?

The first step starts with the Client (browser, web app, mobile app) making a request to a server (hosted on AWS, MongoDB, etc). For the sake of argument, let's say you visit NYTimes.com on your browser. HTTP is known as a layer 7 protocol (Application Layer) on the OSI (Open Systems Interconnection) Model. The OSI Model uses seven layers with specific protocols to transmit data from one user to another. It is the standard model for network communication since 1984. This existed because computers, laptops, devices all operate on a wide range of technologies or Operating Systems. They have to make sure data is transmiteed reliably, error free, and without corruption. Then OSI Model was introduced.

## Layers of the OSI Model

<hr>

<img src="../../assets/increasing-network-utilization/osi_model.png"/>

<br/>

The first top four layers in the OSI Model are the software layers. The bottom three layers are part of the hardware. Each layer in the OSI Model is a package of protocols with functions to perform.

### Application Layer (Layer 7)

The first layer is the Application Layer.

It's responsible for sending and receiving meaningful data from web browsers, emails, mobile apps etc. When you File Transfer Protocol (FTP) into a server to delete or add a couple of files, using HTTP and HTTPS, sending or receiving an email with [Simple Mail Transfer Protocol](https://developer.mozilla.org/en-US/docs/Glossary/SMTP), [Post Office Protocol](https://developer.mozilla.org/en-US/docs/Glossary/POP), [Internet Message Access Protocol](https://developer.mozilla.org/en-US/docs/Glossary/IMAP), your operating on Layer 7.

### Presentation Layer (6)

The presentation layer performs three functions once it takes the data transmitted by the application layer.

Translation: Data received from the application layer is in the form of characters and numbers, which must be translated. The presentation layer turns them into machine-readable binary format, which is a combination of bits. For example, ASCII to EBCDIC.

Data Compression: The presentation layer compresses the data by reducing the number of bits that make up the data (known as data compression). This reduces the amount of data to be delivered and so speeds up the transmission. For real-time video and audio streaming services, this is extremely useful.

Data Encryption and decryption - The presentation layer encrypts data before transmitting it to ensure data integrity and improve the security of sensitive data. The presentation layer encrypts the data and presents it to the application layer at the receiver end. The Secure Socket Layer (SSL) protocol is used for this.

### Session Layer (5)

The session layer performs three main functions after setting up a connection (or session) to enable transmission and reception of data and termination of connection thereafter.

Authentication - To verify a user's idenity authentication is used. When a user requests access to a server, the server verifies the user's identity by requesting a login id and password, and only then does the session layer establish a connection for data transmission.

Authorization - Authorization is the process of determining whether or not a user has authorization to access a specific file on a server, and if they do not, it blocks access to that file; otherwise, it grants access to the user.

Session Management - The session layer establishes the connection for data transmission, keeps track of the session, and kills the session when it is ended. This helps for session management.

### Transport Layer (4)

The transport layer breaks the data transmitted by the session layer into segments. It reassembles the segments to form the data that will be used by the session later (the receiver's end). The transport layer performs three functions:

Segmentation and Reassembly - It splits the data into segments and adds the following info:

Port Number - It specifies the application to which data is to be sent. <br/>
Sequence Number - It helps in reassembly of segments in correct order. <br/>

**Flow Control** - It regulates the amount of data sent from one end to the other. In general, the processing speeds of two systems differ. This layer tells one system to slow down in accordance with another in order to synchronize their speeds and maintain system performance. <br/>
Error Control - Some data packets may be lost during transmission; in this case, the transport layer sends an automatic repeat request to retransmit the corrupted or lost data. It uses a group of bits called checksum to find the correct and complete data.

#### Protocols used in Transport layer:

TCP - The Transmission Control Protocol (TCP) is a connection-oriented transmission protocol that provides feedback on complete and correct data reception at the destination. This is used in situations where complete transmission is required, such as email, ftp, and so on.

UDP - Because the User Datagram Protocol does not provide any feedback and provides connectionless transmission, it is not used for sensitive data transmission. It's used to download videos and films.

## Network Layer (3)

The network layer transmits data from two computers in different networks. Data units inside the network layer are called data packets. The network layer performs two main functions:

Logical Addressing - An IP address is assigned to each computer in a network. Each data packet is assigned an IP address by the network layer to ensure that it reaches its intended destination..

Routing - The network layer uses the IPV4 or IPV6 format for logical addressing. It then adds a mask to each packet that contains four different bit combinations. The first three combinations represent the network to which packets must be routed, while the fourth and final combination represents the host. Packets are routed to their destinations based on this information. This is known as Routing.

Path Determination- This is one of the network layer's most important functions, as it determines the shortest path for a packet to travel to its destination. The following protocols are used by the network layer to accomplish this:

OSPF - Open Shortest Path First
BGF - Border Gateway Protocol
IS-IS - Intermediate System-Intermediate System

## Data Link Layer (2)

The data link layer is a software component of a computer's network card interface that sends data from one computer to another across local media such as copper wire, optical fiber, or air. Data packets are received by the data connection layer from the network layer. It is in charge of data transportation between two physically connected nodes on a network, and its primary goal is to provide data without errors. It divides packets into frames and sends them from one location to another. The data link layer performs the following functions:

Framing - It divides packets into frames and sends them from source to destination.

Physical Addressing - Following the creation of data frames, the data link layer adds the sender and receiver's mac addresses to the frames. A Mac address is a 12-digit alphanumeric number that a computer manufacturer embeds in the network interface card.

Error Control - The data link layer has mechanisms in place to detect corrupted data frames and retransmit the frames that have been damaged or lost.

Flow Control - To maintain data rates on both sides, it coordinates the amount of data to be sent before receiving acknowledgement.

Access Control - At any given time, it determines which device has control of the channel.

## Physical Layer (1)

It is the lowest layer of the OSI model. It uses bits to send data between physical nodes. It converts binary sequences to signals, then converts signals to bits and sends them to the receiver's data link layer. The physical layer's functions are as follows:

Bit Synchronization - It provides a clock (universal) that controls and synchronizes the sender and receiver at the bit level.

Bit Control - It specifies the bit rate, or the number of bits sent per second.

Physical Topologies - It defines topologies for arranging devices, such as star, bus, mesh, and so on..

Transmission Modes - It specifies the transmission mode, such as duplex or half-duplex.

## Whats the point of the OSI Model?

Although the modern internet isn't based on this model (it's based on the TCP/IP Model), the OSI model is still used to visualize and communicate how networks work, as well as to troubleshoot which network layer is causing issues.

### Essentially, the OSI Model in terms of complexity is like a Russian Doll.

<hr>

<img src="../../assets/increasing-network-utilization/russianDoll.jpg"/>

<br/>

## Example Summary of HTTP

1. Client opens connection
2. Client sends get request to resource
3. Server sends back Headers + index.html
4. Client closes connection

## Example Summary of HTTPS

1. Client opens connection
2. Handshake (both client and server have a [symmetrical](https://developer.mozilla.org/en-US/docs/Glossary/Symmetric-key_cryptography) key that is encrypted)
3. Client sends **encrypted** get request to resource
4. Host sends back **encrypted** Headers + index.html
5. Client closes connection

## Example Summary of HTTP 1.0 over tcp

Because of hardware constraints like memory during the 90's, the process was:

1. Client opens connection
2. Client sends get request to resource (/index.html)
3. Once we get response, we close.
4. If there are more resources (like images in index, then /img), client repeats steps 1 - 3.

Lets say that there was a couple of images we wanted to get from the page using good ole' [Netscape](https://www.youtube.com/watch?v=KgAZhRbQ600). Since the way HTTP 1.0 works, each resource or image, would have to be synchronously received.

Combined with TCP's [slow start](https://developer.mozilla.org/en-US/docs/Glossary/TCP_slow_start), opening a new TCP connection with each request, and the buffer that happens if the file is very big. HTTP 1.0 has compounded cons.

## Example Summary of HTTP 1.1

1. Client opens connection
2. Client sends get request **WITH a [Keep-Alive header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Keep-Alive)** to resource /index.html
3. Client gets a response, but this time the connection is kept alive.
4. If there are any other resources, then we fetch them without closing the connection.

<hr>

<img src="../../assets/increasing-network-utilization/http1_x_pipelining_and_more.png"/>

<br/>

HTTP 1.1 saves alot of time. It introduced [persistent TCP connection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Connection_management_in_HTTP_1.x#persistent_connections) with the Keep-Alive Header saving TCP handshake time, [HTTP Caching with E-Tags](https://www.mnot.net/cache_docs/), immediately sending a large amount of data like a big HTML file through [Streaming with Chunked transfer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding#chunked_encoding) for an image this would mean "chunks" of data would be sent and you'd be able to visually see the data transfer as the image populates, and [Pipelining](https://developer.mozilla.org/en-US/docs/Web/HTTP/Connection_management_in_HTTP_1.x) sends requests without waiting for a response back.

Pipelining now is disabled by default because it was superceded by HTTP/2's Multiplexing.

#### All these incremental features mean lower latency.

## Features of HTTPS/2 (aka SPDY)

1. A connection is opened with [Multiplexing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#http_and_connections) (supercedes HTTP/1.1's Pipelining)/. This will combine the Client's requests into a single request over a TCP connection.
2. Compression - After Multiplexing the requests, then it's compressed into binary format.
3. With Server Push, the server will push the Request Response, this is slightly faster than waiting for the response back.
4. Being that HTTP/2 is [stateless](https://www.geeksforgeeks.org/difference-between-stateless-and-stateful-protocol/), this has another benefit if the connection terminates.
5. HTTPS/2 is secure by default - the appended [S]
6. Application Layer Protocol Negotiation (ALPN) - For example, during TLS, the ALPN (an extension of TLS) contains the protocols it supports, the server then picks those that it supports too.

## Features of HTTP/3 (previously known as QUIC) [and coming soon at the time of writing](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_3)

1. Replaces TCP with QUIC (UDP with Congestion Control) <br/>
    1a. TCP and UDP comparison chart

<hr>

<img src="../../assets/increasing-network-utilization/osi_model.png"/>

<br/>

There have been many efforts made to reduce latency with each improvement to the first step in connecting to a server. I hope this article helped to bring some understanding of how iterative additions have improved performance at the network level.


## Resources

[Adaptive Loading](https://addyosmani.com/blog/adaptive-loading/)

[Adaptive Loading and Improving Performance on Slow Devices](https://web.dev/adaptive-loading-cds-2019/)

[About Content Delivery Networks](https://web.dev/content-delivery-networks/#initial-audit)

[Good article on latency](https://www.speedshop.co/2015/11/05/page-weight-doesnt-matter.html)

[The OSI Model](https://www.geeksforgeeks.org/layers-of-osi-model/)

[More on The OSI Model](https://www.imperva.com/learn/application-security/osi-model/)