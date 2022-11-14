import * as React from 'react';
import {Button} from '@mui/material';
import AccountNew from '../components/Add/AccountNew';
import NomineeNew from '../components/Add/NomineeNew';
import QualificationNew from '../components/Add/QualificationNew';
import KycNew from '../components/Add/KycNew';
import SalaryNew from '../components/Add/SalaryNew';
import AssoicateNew from '../components/Add/AssoicateNew';
import CustomerNew from '../components/Add/CustomerNew';
import EmployeeNew from '../components/Add/EmployeeNew';
import EmployeeInfoNew from '../components/Add/EmployeeInfoNew';
import InvesmentNew from '../components/Add/InvesmentNew';
import PaymentNew from '../components/Add/PaymentNew';

export default function MyApp() {
  return (
    <div>
      {/* <AccountNew user_id="1" user_type="1"></AccountNew> */}
      {/* <NomineeNew user_id="1" user_type="1"></NomineeNew> */}

      {/* <DesignationNew></DesignationNew> */}
      {/* <KycNew user_id="1" user_type="1"></KycNew> */}
      {/* <QualificationNew emp_id="1"></QualificationNew> */}
      {/* <SalaryNew></SalaryNew> */}
      {/* <AssoicateNew></AssoicateNew> */}

      <CustomerNew/>

      {/* <EmployeeNew></EmployeeNew> */}

      {/* <EmployeeInfoNew emp_id="1"></EmployeeInfoNew> */}
{/* 
      <InvesmentNew user_id="1" user_type="1"></InvesmentNew> */}

      {/* <PaymentNew></PaymentNew> */}

    </div>
  );
}