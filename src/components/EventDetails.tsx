import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

interface EventDetailsProps {
	selectedDate?: Date | null;
}

async function fetchApiStatus() {
	const res = await fetch(`https://ui.dev/api/courses/react-query/status`);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return await res.json();
}

const EventDetails: React.FC<EventDetailsProps> = (props) => {
	const { date } = useParams<{ date: string }>();
	const dateDetailsQuery = useQuery({
		queryKey: [props.selectedDate?.toDateString()],
		queryFn: () => fetchApiStatus(),
	});

	if (dateDetailsQuery.isLoading) {
		return <div>...</div>;
	}
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const data = dateDetailsQuery.data;
	return (
		<div>
			<p>{props.selectedDate?.toDateString() ?? date}</p>
			<pre>{JSON.stringify(data)}</pre>
			<pre
				style={{
					maxWidth: 600,
					maxHeight: 400,
					whiteSpace: 'pre-wrap',
					overflowX: 'auto',
					overflowY: 'auto',
				}}>
				{JSON.stringify({
					weeks: [
						{
							year: 2023,
							onum: 42,
							tasksInfo: [],
							days: [
								{
									inPeriod: false,
									tasksInfo: [],
									totalTime: 0,
									totalTimeRatio: 0,
									totalPaymentByCurrencies: [],
									totalPaymentByCurrenciesRatio: [
										{
											currencyId: 1,
											value: 0,
										},
									],
									dateStr: '2023-10-15',
								},
								{
									inPeriod: false,
									tasksInfo: [
										{
											task: {
												id: 98934,
												name: 'Finances',
												description: null,
												icon: 'FINANCES',
												color: '#00C700',
												ownerId: 14538,
												createdAt: '2023-10-17T02:35:24.548+0000',
												updatedAt: '2023-10-17T02:36:52.485+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: 'C83BFE45-2695-4F1F-A3B9-4B6EABA1DC39',
												pomodoroTime: 25,
												sideIndex: 10,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 209,
											totalTimeRatio: 1,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98930,
												name: 'Study',
												description: null,
												icon: 'STUDY',
												color: '#00C700',
												ownerId: 14538,
												createdAt: '2023-10-17T02:33:48.310+0000',
												updatedAt: '2023-10-17T02:37:17.850+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: '075D1377-6D4C-4A4E-B6C4-5A56A15A5395',
												pomodoroTime: 25,
												sideIndex: 6,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 8,
											totalTimeRatio: 0.03827751196172249,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
									],
									totalTime: 217,
									totalTimeRatio: 0.008487835406399124,
									totalPaymentByCurrencies: [
										{
											currencyId: 1,
											value: 0,
										},
									],
									totalPaymentByCurrenciesRatio: [
										{
											currencyId: 1,
											value: 0,
										},
									],
									dateStr: '2023-10-16',
								},
								{
									inPeriod: false,
									tasksInfo: [
										{
											task: {
												id: 98899,
												name: 'Meeting',
												description: null,
												icon: 'MEETING',
												color: '#08B5F2',
												ownerId: 14538,
												createdAt: '2023-10-16T21:14:47.224+0000',
												updatedAt: '2023-10-17T02:32:00.675+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: '66C2F832-8FF5-494C-AD34-3DFBB54DF74C',
												pomodoroTime: 25,
												sideIndex: 7,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 4838,
											totalTimeRatio: 1,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98933,
												name: 'Break',
												description: null,
												icon: 'BREAK',
												color: '#00C700',
												ownerId: 14538,
												createdAt: '2023-10-17T02:35:02.243+0000',
												updatedAt: '2023-10-17T02:37:32.841+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: '487FCFCA-E541-4DB7-B885-F5B4697BA955',
												pomodoroTime: 25,
												sideIndex: 4,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 3027,
											totalTimeRatio: 0.6256717651922282,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98895,
												name: 'Code',
												description: null,
												icon: 'CODE',
												color: '#08B5F2',
												ownerId: 14538,
												createdAt: '2023-10-16T21:13:19.364+0000',
												updatedAt: '2023-10-17T20:24:15.775+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: 'CE243B1B-9D80-4DDA-B1C3-3CECD207A473',
												pomodoroTime: 25,
												sideIndex: 3,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 1668,
											totalTimeRatio: 0.3447705663497313,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98930,
												name: 'Study',
												description: null,
												icon: 'STUDY',
												color: '#00C700',
												ownerId: 14538,
												createdAt: '2023-10-17T02:33:48.310+0000',
												updatedAt: '2023-10-17T02:37:17.850+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: '075D1377-6D4C-4A4E-B6C4-5A56A15A5395',
												pomodoroTime: 25,
												sideIndex: 6,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 11,
											totalTimeRatio: 0.0022736668044646548,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98934,
												name: 'Finances',
												description: null,
												icon: 'FINANCES',
												color: '#00C700',
												ownerId: 14538,
												createdAt: '2023-10-17T02:35:24.548+0000',
												updatedAt: '2023-10-17T02:36:52.485+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: 'C83BFE45-2695-4F1F-A3B9-4B6EABA1DC39',
												pomodoroTime: 25,
												sideIndex: 10,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 6,
											totalTimeRatio: 0.0012401818933443572,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
									],
									totalTime: 9550,
									totalTimeRatio: 0.3735429867793163,
									totalPaymentByCurrencies: [
										{
											currencyId: 1,
											value: 0,
										},
									],
									totalPaymentByCurrenciesRatio: [
										{
											currencyId: 1,
											value: 0,
										},
									],
									dateStr: '2023-10-17',
								},
								{
									inPeriod: true,
									tasksInfo: [
										{
											task: {
												id: 98899,
												name: 'Meeting',
												description: null,
												icon: 'MEETING',
												color: '#08B5F2',
												ownerId: 14538,
												createdAt: '2023-10-16T21:14:47.224+0000',
												updatedAt: '2023-10-17T02:32:00.675+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: '66C2F832-8FF5-494C-AD34-3DFBB54DF74C',
												pomodoroTime: 25,
												sideIndex: 7,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 7513,
											totalTimeRatio: 1,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98895,
												name: 'Code',
												description: null,
												icon: 'CODE',
												color: '#08B5F2',
												ownerId: 14538,
												createdAt: '2023-10-16T21:13:19.364+0000',
												updatedAt: '2023-10-17T20:24:15.775+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: 'CE243B1B-9D80-4DDA-B1C3-3CECD207A473',
												pomodoroTime: 25,
												sideIndex: 3,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 4541,
											totalTimeRatio: 0.604419007054439,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98933,
												name: 'Break',
												description: null,
												icon: 'BREAK',
												color: '#00C700',
												ownerId: 14538,
												createdAt: '2023-10-17T02:35:02.243+0000',
												updatedAt: '2023-10-17T02:37:32.841+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: '487FCFCA-E541-4DB7-B885-F5B4697BA955',
												pomodoroTime: 25,
												sideIndex: 4,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 1479,
											totalTimeRatio: 0.19685877811792893,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98930,
												name: 'Study',
												description: null,
												icon: 'STUDY',
												color: '#00C700',
												ownerId: 14538,
												createdAt: '2023-10-17T02:33:48.310+0000',
												updatedAt: '2023-10-17T02:37:17.850+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: '075D1377-6D4C-4A4E-B6C4-5A56A15A5395',
												pomodoroTime: 25,
												sideIndex: 6,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 1201,
											totalTimeRatio: 0.15985624916810862,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
									],
									totalTime: 14734,
									totalTimeRatio: 0.5763122897598373,
									totalPaymentByCurrencies: [
										{
											currencyId: 1,
											value: 0,
										},
									],
									totalPaymentByCurrenciesRatio: [
										{
											currencyId: 1,
											value: 0,
										},
									],
									dateStr: '2023-10-18',
								},
								{
									inPeriod: false,
									tasksInfo: [
										{
											task: {
												id: 98899,
												name: 'Meeting',
												description: null,
												icon: 'MEETING',
												color: '#08B5F2',
												ownerId: 14538,
												createdAt: '2023-10-16T21:14:47.224+0000',
												updatedAt: '2023-10-17T02:32:00.675+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: '66C2F832-8FF5-494C-AD34-3DFBB54DF74C',
												pomodoroTime: 25,
												sideIndex: 7,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 5043,
											totalTimeRatio: 1,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98895,
												name: 'Code',
												description: null,
												icon: 'CODE',
												color: '#08B5F2',
												ownerId: 14538,
												createdAt: '2023-10-16T21:13:19.364+0000',
												updatedAt: '2023-10-17T20:24:15.775+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: 'CE243B1B-9D80-4DDA-B1C3-3CECD207A473',
												pomodoroTime: 25,
												sideIndex: 3,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 3790,
											totalTimeRatio: 0.7515367836605196,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98933,
												name: 'Break',
												description: null,
												icon: 'BREAK',
												color: '#00C700',
												ownerId: 14538,
												createdAt: '2023-10-17T02:35:02.243+0000',
												updatedAt: '2023-10-17T02:37:32.841+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: '487FCFCA-E541-4DB7-B885-F5B4697BA955',
												pomodoroTime: 25,
												sideIndex: 4,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 3092,
											totalTimeRatio: 0.613127106880825,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98897,
												name: 'Read',
												description: null,
												icon: 'READ',
												color: '#08B5F2',
												ownerId: 14538,
												createdAt: '2023-10-16T21:13:52.295+0000',
												updatedAt: '2023-10-16T21:13:52.465+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: '3A70A8E3-7892-42E9-9D94-6E187C378053',
												pomodoroTime: 25,
												sideIndex: 8,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 0,
											totalTimeRatio: 0,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
									],
									totalTime: 11925,
									totalTimeRatio: 0.46643980286317765,
									totalPaymentByCurrencies: [
										{
											currencyId: 1,
											value: 0,
										},
									],
									totalPaymentByCurrenciesRatio: [
										{
											currencyId: 1,
											value: 0,
										},
									],
									dateStr: '2023-10-19',
								},
								{
									inPeriod: false,
									tasksInfo: [
										{
											task: {
												id: 98898,
												name: 'Write',
												description: null,
												icon: 'WRITE',
												color: '#08B5F2',
												ownerId: 14538,
												createdAt: '2023-10-16T21:14:34.591+0000',
												updatedAt: '2023-10-17T20:24:34.202+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: 'DC46965A-2BD3-4E68-9800-5EDF299294CF',
												pomodoroTime: 25,
												sideIndex: 1,
												tag: '36117',
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 11945,
											totalTimeRatio: 1,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98933,
												name: 'Break',
												description: null,
												icon: 'BREAK',
												color: '#00C700',
												ownerId: 14538,
												createdAt: '2023-10-17T02:35:02.243+0000',
												updatedAt: '2023-10-17T02:37:32.841+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: '487FCFCA-E541-4DB7-B885-F5B4697BA955',
												pomodoroTime: 25,
												sideIndex: 4,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 3079,
											totalTimeRatio: 0.2577647551276685,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98893,
												name: 'Urgent',
												description: null,
												icon: 'URGENT',
												color: '#08B5F2',
												ownerId: 14538,
												createdAt: '2023-10-16T21:12:56.941+0000',
												updatedAt: null,
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: 'BC365C25-78E6-4865-9703-DBBCBF835C79',
												pomodoroTime: 25,
												sideIndex: 2,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 2496,
											totalTimeRatio: 0.20895772289660947,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98897,
												name: 'Read',
												description: null,
												icon: 'READ',
												color: '#08B5F2',
												ownerId: 14538,
												createdAt: '2023-10-16T21:13:52.295+0000',
												updatedAt: '2023-10-16T21:13:52.465+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: '3A70A8E3-7892-42E9-9D94-6E187C378053',
												pomodoroTime: 25,
												sideIndex: 8,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 2263,
											totalTimeRatio: 0.18945165341146925,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98895,
												name: 'Code',
												description: null,
												icon: 'CODE',
												color: '#08B5F2',
												ownerId: 14538,
												createdAt: '2023-10-16T21:13:19.364+0000',
												updatedAt: '2023-10-17T20:24:15.775+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: 'CE243B1B-9D80-4DDA-B1C3-3CECD207A473',
												pomodoroTime: 25,
												sideIndex: 3,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 2063,
											totalTimeRatio: 0.17270824612808708,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98929,
												name: 'Chat',
												description: null,
												icon: 'CHAT',
												color: '#00C700',
												ownerId: 14538,
												createdAt: '2023-10-17T02:33:28.405+0000',
												updatedAt: '2023-10-17T02:37:37.466+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: 'F6353B59-5F4A-4563-9F59-E3E3F2CB1718',
												pomodoroTime: 25,
												sideIndex: 11,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 1940,
											totalTimeRatio: 0.16241105064880704,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
										{
											task: {
												id: 98899,
												name: 'Meeting',
												description: null,
												icon: 'MEETING',
												color: '#08B5F2',
												ownerId: 14538,
												createdAt: '2023-10-16T21:14:47.224+0000',
												updatedAt: '2023-10-17T02:32:00.675+0000',
												deletedAt: null,
												hourlyRate: 0,
												currencyId: 1,
												extId: '66C2F832-8FF5-494C-AD34-3DFBB54DF74C',
												pomodoroTime: 25,
												sideIndex: 7,
												tag: null,
												highPriority: false,
												pomodoro: false,
												billable: false,
											},
											totalTime: 1780,
											totalTimeRatio: 0.1490163248221013,
											totalPaymentByCurrencies: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPaymentByCurrenciesRatio: [
												{
													currencyId: 1,
													value: 0,
												},
											],
											totalPayment: 0,
											totalPaymentRatio: 0,
										},
									],
									totalTime: 25566,
									totalTimeRatio: 1,
									totalPaymentByCurrencies: [
										{
											currencyId: 1,
											value: 0,
										},
									],
									totalPaymentByCurrenciesRatio: [
										{
											currencyId: 1,
											value: 0,
										},
									],
									dateStr: '2023-10-20',
								},
								{
									inPeriod: false,
									tasksInfo: [],
									totalTime: 0,
									totalTimeRatio: 0,
									totalPaymentByCurrencies: [],
									totalPaymentByCurrenciesRatio: [
										{
											currencyId: 1,
											value: 0,
										},
									],
									dateStr: '2023-10-21',
								},
							],
							totalTime: 14734,
							totalTimeRatio: null,
							totalPaymentByCurrencies: [
								{
									currencyId: 1,
									value: 0,
								},
							],
							totalPaymentByCurrenciesRatio: [],
						},
					],
					currencies: [
						{
							id: 1,
							symbol: '$',
							key: 'Dollar',
						},
					],
					totalTime: 14734,
					totalPayment: [
						{
							currencyId: 1,
							value: 0,
						},
					],
					beginDateStr: '2023-10-18',
					endDateStr: '2023-10-18',
				})}
			</pre>
		</div>
	);
};

export default EventDetails;
