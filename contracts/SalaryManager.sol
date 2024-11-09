// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SalaryManager {
    address public owner;

    struct Employee {
        address payable wallet;
        uint256 salary;
        uint256 lastPaid;
    }

    mapping(address => Employee) public employees;

    event SalaryPaid(address indexed employee, uint256 amount, uint256 timestamp);
    event EmployeeAdded(address indexed employee, uint256 salary);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addEmployee(address payable _wallet, uint256 _salary) external onlyOwner {
        require(_wallet != address(0), "Invalid address");
        require(_salary > 0, "Salary must be greater than zero");
        employees[_wallet] = Employee(_wallet, _salary, 0);
        emit EmployeeAdded(_wallet, _salary);
    }

    function paySalary(address payable _wallet) external onlyOwner {
        Employee storage employee = employees[_wallet];
        require(employee.wallet != address(0), "Employee does not exist");
        require(block.timestamp >= employee.lastPaid + 30 days, "Salary already paid for this month");

        employee.wallet.transfer(employee.salary);
        employee.lastPaid = block.timestamp;

        emit SalaryPaid(_wallet, employee.salary, block.timestamp);
    }

    function getEmployeeDetails(address _wallet) external view returns (uint256 salary, uint256 lastPaid) {
        Employee storage employee = employees[_wallet];
        return (employee.salary, employee.lastPaid);
    }

    receive() external payable {}
}
