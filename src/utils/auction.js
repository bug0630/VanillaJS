document.getElementById("bidForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    let bidAmount = parseFloat(document.getElementById("bidAmount").value);
    let currentBid = parseFloat(document.getElementById("currentBid").textContent);
    
    // 입찰금액이 유효한지 확인
    if (bidAmount <= currentBid) {
      alert("현재 입찰가보다 높은 입찰가를 입력해 주세요.");
      return;
    }
    
  // 현재 입찰 내용을 업데이트하고 사용자에게 알립니다
    document.getElementById("currentBid").textContent = bidAmount.toFixed(2);
    alert("입찰이 성공적으로 진행되었습니다!");
  });