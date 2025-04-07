import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FinancingCalculator = () => {
  const [formData, setFormData] = useState({
    vehiclePrice: 89990,
    downPayment: 20000,
    tradeInValue: 0,
    loanTerm: 60,
    interestRate: 5.5,
  });

  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const calculatePayment = () => {
    const principal = formData.vehiclePrice - formData.downPayment - formData.tradeInValue;
    const monthlyRate = formData.interestRate / 100 / 12;
    const numberOfPayments = formData.loanTerm;

    const payment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthlyPayment(payment);
  };

  return (
    <div className="section bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Financing Calculator</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Vehicle Price ($)</label>
              <input
                type="number"
                name="vehiclePrice"
                value={formData.vehiclePrice}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Down Payment ($)</label>
              <input
                type="number"
                name="downPayment"
                value={formData.downPayment}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Trade-In Value ($)</label>
              <input
                type="number"
                name="tradeInValue"
                value={formData.tradeInValue}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Loan Term (months)</label>
              <input
                type="number"
                name="loanTerm"
                value={formData.loanTerm}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Interest Rate (%)</label>
              <input
                type="number"
                name="interestRate"
                value={formData.interestRate}
                onChange={handleChange}
                step="0.1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <button
              onClick={calculatePayment}
              className="btn btn-primary w-full"
            >
              Calculate Payment
            </button>

            {monthlyPayment > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-gray-50 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Estimated Monthly Payment</h3>
                <p className="text-3xl font-bold text-accent">
                  ${monthlyPayment.toFixed(2)}
                </p>
                <p className="text-gray-600 mt-2">
                  Based on {formData.loanTerm} months at {formData.interestRate}% APR
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FinancingCalculator; 