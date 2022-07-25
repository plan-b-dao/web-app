export const PLAN_B_FOUNDER_CONTRACT_ABI = [
    "function balance() external view returns (uint256)",
    "function addToFounder(address _addr) external payable",
    "function removeFromFounder() external",
    "function milestone(uint256 _newRate) external payable",
    "function isFounder(address _addr) external view returns (bool)",
    "function total() external view returns (uint256)",
    "function rate() external view returns (uint256)",
    "event FounderAdded(address founder)",
    "event Withdraw(address founder, uint256 amount)",
    "event Milestone(address founder, uint256 amount)",
]

export const PLAN_B_FOUNDER_CONTRACT_EVENTS = {
    FOUNDER_ADDED: "FounderAdded",
    WITHDRAW: "Withdraw",
    MILESTONE: "Milestone",
}