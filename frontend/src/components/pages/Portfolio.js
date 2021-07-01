import React from 'react';

const Portfolio = () => {
  return (
    <section>
      <div class="sub-section">
            <p>During my  carrier  i  worked omn many  easy to complex projects </p>
         <table  class="projectTable" border="2">
            <tr>
              <th  colspan="3">Projects </th>
              <th  colspan="2">links</th>
            </tr>
            <tr>
              <td colspan="3"> <strong>BES -BlackeBerry Enterprise Server</strong>   BES provide the unified enterprise mesaging solution throw a secured channel and support  Blakberry,iOs, Andriod and Windos mobile phone</td>
              <td colspan="2"><a href="#">BES</a></td>
            </tr>
            <tr>
              <td colspan="3"> <strong>CallPilot</strong>  CallPilot is Nortel's computer telephony, WinNT client/server based unified messaging and multimedia messaging solution for combining voicemail, fax and email in a single interface</td>
              <td colspan="2"><a href="#">CallPilot</a></td>
            </tr>
            
            <tr>
              <td colspan="3"> <strong>Embeded OS</strong>   This project allow  to run embeded operinting  in unix kernal- </td>
              <td colspan="2"><a href="#">Embeded OS</a></td>
            </tr>
            <tr>
              <td colspan="3"><strong>Serice bureau</strong>  This project allow third party cell phone provider to  to  route their prepaide wireless call to authetication in a remote prepaid note </td>
              <td colspan="2"><a href="#">Serice bureau</a></td>
            </tr>
            <tr>
              <td colspan="3"><strong> Out of Box Failure (OBF)  </strong> Will provide a solution to custmers in 24 hrs </td>
              <td colspan="2"><a href="#">OBF</a></td>
            </tr>
          </table>
        <footer>
          <p>Mathi Mahalingam &copy; 2021</p>
        </footer>
        </div>
    </section>
  );
};

export default Portfolio;

