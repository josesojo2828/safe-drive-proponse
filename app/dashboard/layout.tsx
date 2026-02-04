import Sidebar from '../components/Sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Sidebar />
            <main className="dashboard-layout">
                <div className="dashboard-content">
                    {children}
                </div>
            </main>
        </div>
    );
}
