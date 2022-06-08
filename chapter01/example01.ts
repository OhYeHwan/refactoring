// 장르, 규모 -> 기초비용 책정
// 장르 : 비극, 희극
// 포인트를 이용하여 공연료 할인
import invoices from "./invoices.json";
import plays from "./plays.json";
import createStatementData from "./createStatementData";
import { Iplays, Iinvoices } from "./Interface";

// 함수 추출하기
// 조금씩 변경하고 매번 테스트하는 것이 핵심
// 하나의 리팩터링을 문제없이 끝낼 때마다 커밋
// 자잘한 변경들이 의미있는 단위로 모이면 공유 저장소에 푸시
function statement(invoices: Iinvoices, plays: Iplays): string {
  return renderPlainText(createStatementData(invoices, plays));
}

function renderPlainText(data: Iinvoices): string {
  let result = `청구 내역 (고객명: ${data.customer})\n`;
  for (let perf of data.performances) {
    result += `  ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }

  result += `총액 ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
  return result;
}

function usd(aNumber: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

const result = statement(invoices, plays);
console.log(result);
