/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Discipline {
  id: string;
  name: string;
  shortDesc: string;
  detailDesc: string;
  image: string;
  category: string; // "SISTEMA DE PODER" classes
  scheduleTimes: string[];
  maxCapacity: number;
}

export interface Booking {
  id: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  disciplineId: string;
  disciplineName: string;
  date: string; // YYYY-MM-DD
  timeSlot: string;
  confirmationCode: string;
  createdAt: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  popular?: boolean;
}

export interface CordonesAdvice {
  id: number;
  text: string;
  category: 'motivation' | 'humor' | 'instruction';
}
