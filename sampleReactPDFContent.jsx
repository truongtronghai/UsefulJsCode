const data = {
  assessmentDate: "2025-11-11T06:50:47Z",
  tenant: "entra_id_tenant_name",
  remediationActions:
    "Enable Security Defaults or ensure there are no gaps in Conditional Access policies.",
  license: "Microsoft Entra ID P2",
  riskScore: 80,
  riskLevel: 5,
  nUser: 25,
  details: [
    {
      remediation:
        "Enable Security Defaults or ensure there are no gaps in Conditional Access policies.",
      exposure: 5,
      impact: 5,
      name: "Identity Hygiene",
      description:
        "In the last 3 days, a total of 17882 attack alerts were collected, with a significant focus on exploitation and infiltration attempts. The user id who initiated several attacks includes dipankar.roy@toyota.com.au and Azure MFA StrongAuthenticationService, indicating a mix of user-driven and automated threats. The criticality of these alerts varies, with many indicating potential unauthorized access or account changes.",
      nFail: 5,
      nHigh: 5,
      nMedium: 5,
      nPass: 5,
      riskRating: 2,
      riskRating: 5,
      evidence:
        "1. User Login Location Changes\n\n\u00A0\u00A0\u00A0\u00A0• User ID: dipankar.roy@toyota.com.au\n\u00A0\u00A0\u00A0\u00A0• Description: Signed in from a new location (1262.7 km away from last login).\n\u00A0\u00A0\u00A0\u00A0• Risk Rate: Infiltration\n\u00A0\u00A0\u00A0\u00A0• Attack Start Time: 2026-05-20T03:11:03.484951+00:00\n\u00A0\u00A0\u00A0\u00A0• Source IP: 203.105.191.205\n\u00A0\u00A0\u00A0\u00A0• Recommendation: Suspend the account, revoke all sessions, and contact the user to verify the login.\n\n2. User Login Location Changes\n\n    • User ID: peter.walker@toyota.com.au\n    • Description: Signed in from a new location (1262.7 km away from last login).\n    • Risk Rate: Infiltration\n    • Attack Start Time: 2026-05-20T03:11:03.484951+00:00\n    • Source IP: 203.105.191.205\n    • Recommendation: Suspend the account, revoke all sessions, and confirm the legitimacy of the login with the user.",
    },
    {
      remediation:
        "Ensure multi-factor authentication (MFA) is enabled for all user accounts.",
      exposure: 5,
      impact: 3,
      name: "Identity Intelligence",
      description:
        "There are many accounts whose password policy is set to never expires.\nThere are login attempts that are not covered by any Conditional Access policy.\nThere are login attempts that are not covered by any Conditional Access policy.",
      nFail: 5,
      nHigh: 5,
      nMedium: 412,
      nPass: 5,
      riskRating: 2,
      riskRating: 3,
      evidence:
        "1. User Login Location Changes\n\n\u00A0\u00A0\u00A0\u00A0• User ID: dipankar.roy@toyota.com.au\n\u00A0\u00A0\u00A0\u00A0• Description: Signed in from a new location (1262.7 km away from last login).\n\u00A0\u00A0\u00A0\u00A0• Risk Rate: Infiltration\n\u00A0\u00A0\u00A0\u00A0• Attack Start Time: 2026-05-20T03:11:03.484951+00:00\n\u00A0\u00A0\u00A0\u00A0• Source IP: 203.105.191.205\n\u00A0\u00A0\u00A0\u00A0• Recommendation: Suspend the account, revoke all sessions, and contact the user to verify the login.\n\n2. User Login Location Changes\n\n    • User ID: peter.walker@toyota.com.au\n    • Description: Signed in from a new location (1262.7 km away from last login).\n    • Risk Rate: Infiltration\n    • Attack Start Time: 2026-05-20T03:11:03.484951+00:00\n    • Source IP: 203.105.191.205\n    • Recommendation: Suspend the account, revoke all sessions, and confirm the legitimacy of the login with the user.",
    },
    {
      remediation: "Enforce password expiration after a defined period.",
      exposure: 4,
      impact: 3,
      name: "Microsoft 365",
      description:
        "Attackers use stolen credentials from other breaches to gain unauthorized access to accounts.",
      nFail: 5,
      nHigh: 5,
      nMedium: 5,
      nPass: 5,
      riskRating: 2,
      riskRating: 3,
      evidence:
        "1. User Login Location Changes\n\n\u00A0\u00A0\u00A0\u00A0• User ID: dipankar.roy@toyota.com.au\n\u00A0\u00A0\u00A0\u00A0• Description: Signed in from a new location (1262.7 km away from last login).\n\u00A0\u00A0\u00A0\u00A0• Risk Rate: Infiltration\n\u00A0\u00A0\u00A0\u00A0• Attack Start Time: 2026-05-20T03:11:03.484951+00:00\n\u00A0\u00A0\u00A0\u00A0• Source IP: 203.105.191.205\n\u00A0\u00A0\u00A0\u00A0• Recommendation: Suspend the account, revoke all sessions, and contact the user to verify the login.\n\n2. User Login Location Changes\n\n    • User ID: peter.walker@toyota.com.au\n    • Description: Signed in from a new location (1262.7 km away from last login).\n    • Risk Rate: Infiltration\n    • Attack Start Time: 2026-05-20T03:11:03.484951+00:00\n    • Source IP: 203.105.191.205\n    • Recommendation: Suspend the account, revoke all sessions, and confirm the legitimacy of the login with the user.",
    },
    {
      remediation: "",
      exposure: 0,
      impact: 0,
      name: "Platform Hygiene",
      description:
        "Risk of tenant compromise if admin credentials are stolen, allowing unauthorized access and control.",
      nFail: 5,
      nHigh: 5,
      nMedium: 5,
      nPass: 5,
      riskRating: 2,
      riskRating: 2,
      evidence:
        "There are many accounts whose password policy is set to never expires.\nThere are login attempts that are not covered by any Conditional Access policy.\nThere are login attempts that are not covered by any Conditional Access policy. ",
    },
    {
      remediation: "",
      exposure: 0,
      impact: 0,
      name: "Threat Detection",
      description: "",
      nFail: 5,
      nHigh: 17000,
      nMedium: 30000,
      nPass: 60000,
      riskRating: 2,
      evidence:
        "There are many accounts whose password policy is set to never expires.\nThere are login attempts that are not covered by any Conditional Access policy.\nThere are login attempts that are not covered by any Conditional Access policy. ",
    },
  ],
  domainName: "mytenant.onmicrosoft.com",
  poweredBy: "Dela Security",
  description:
    "Your Entra ID tenant has several vulnerabilities that allow attackers to take over admin provilege.",
};

const RiskLevelText = {
  1: "No Issue",
  2: "Low",
  3: "Medium",
  4: "High",
  5: "Critical",
};

const reportTitle = "Breach Likelihood Assessment";

const borderColor = "#CFCFCF";
const colorGray2 = "#EBEAEF";
const colorGray6 = "#626262";
const colorGray8 = "#232323";
const bgColor = "#F9F8F7";
const bgColorGray = "#F7F8FA";

const HeaderReport = ({ title }) => (
  <View style={styles.header} fixed>
    <Text style={styles.reportTitle}>
      {title || "Entra ID Breach Likelihood Report"}
    </Text>
  </View>
);

const FooterReport = () => (
  <View style={styles.footer} fixed>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "5px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Image
          style={styles.imageReportFooter}
          src="https://react-pdf.org/images/logo.png"
        />
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Inter",
            fontSize: 5,
          }}
        >
          DELA
        </Text>
        <Text
          style={{
            fontFamily: "Inter",
            fontSize: 5,
          }}
        >
          SECURITY
        </Text>
      </View>
    </View>

    <Text
      style={styles.footerPageNumber}
      render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
    />

    <Text style={styles.footerTextRight}>
      © {new Date().getFullYear()} Dela — All rights reserved
    </Text>
  </View>
);

Font.registerHyphenationCallback((word) => [word]); // disable hyphenation break

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-400-normal.woff",
      fontWeight: 400, // Regular
    },
    {
      src: "https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-500-normal.woff",
      fontWeight: 500, // Medium
    },
    {
      src: "https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-600-normal.woff",
      fontWeight: 600, // SemiBold
    },
    {
      src: "https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-700-normal.woff",
      fontWeight: 700, // Bold
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    width: 595, // A4 width in points
    height: 842, // A4 height in points
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    color: "#232323",
    paddingTop: 40, // leave space for header
    paddingHorizontal: 40, // uniform margins
    paddingBottom: 60, // leave space for footer
    // border: "1 solid red", // used for seeing the layout
    fontFamily: "Inter",
    fontSize: 8,
  },

  content: {
    flexGrow: 1,
    flexDirection: "column",
    fontSize: 7.5,
    // border: "1 solid red", // used for seeing the layout
  },

  reportTitle: {
    textAlign: "left",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 1.5,
    color: "#232323",
  },

  sectionTitle: {
    fontSize: 10.5,
    fontWeight: 500,
    marginBottom: 6,
    textAlign: "left",
    color: colorGray6,
  },

  header: {
    position: "absolute",
    top: 10,
    left: 40,
    right: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  footer: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: `1px solid ${borderColor}`,
  },

  imageReportFooter: {
    width: "10px",
  },

  footerTextLeft: {
    fontSize: 7.5,
    color: colorGray6,
  },

  footerTextRight: {
    fontSize: 7.5,
    color: colorGray8,
  },

  footerPageNumber: {
    fontSize: 7.5,
    color: colorGray6,
  },

  gridLayout: {
    flexDirection: "row",
    gap: 15,
    maxHeight: 220,
  },

  boxLeftStyle: {
    width: "40%",
    borderRadius: 4,
    flexDirection: "column",
    border: `1px solid ${borderColor}`,
  },

  boxRightStyle: {
    width: "60%",
    borderRadius: 4,
    flexDirection: "column",
    border: `1px solid ${borderColor}`,
  },

  boxInfoStyle: {
    flexDirection: "column",
    gap: 8,
  },

  boxInfoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  boxInfoLeft: {
    width: "50%",
    gap: 3,
  },

  boxInfoRight: {
    width: "50%",
    gap: 3,
  },
});

const tableStyles = StyleSheet.create({
  table: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "16 12 8 12",
    height: "100%",
  },
  tableRow: {
    flexDirection: "row",
    gap: 4,
  },
  firstCol: {
    flex: 1,
    fontWeight: 500,
    color: colorGray8,
    fontSize: 8,
    lineHeight: 1.5,
  },
  col: {
    width: "16%",
    textAlign: "center",
    fontWeight: 500,
    color: colorGray8,
    fontSize: 8,
    lineHeight: 1.5,
  },
});

const detailStyles = StyleSheet.create({
  textWrapper: {
    fontFamily: "Inter",
  },
  boxTitle: {
    fontWeight: 600,
    fontSize: 10.5,
  },
  itemDescription: {
    fontWeight: 500,
    fontSize: "8px",
  },
  itemTitle: {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "8px",
    color: colorGray6,
  },
  categoryListItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 0,
    //height: "200px",
    border: "0.8px solid #EBEAEF",
    borderRadius: 4,
  },
  statusBadge: {
    padding: "2 6",
    borderRadius: "2px",
    justifyContent: "center",
    alignItems: "center",
  },
  evidenceInfo: {
    alignItems: "flex-start",
    padding: "10px",
    gap: "6px",
    // height: "200px",
    border: `1px solid ${borderColor}`,
    borderRadius: 6,
  },
});

const StatusTextColor = {
  fail: "#DC2626",
  critical: "#DC2626",
  high: "#EA580C",
  medium: "#A16207",
  low: "#15803D",
  noFail: "#15803D",
};

const StatusBadge = ({ status, txt }) => {
  let bgColor = "#FFFFFF";
  let txtColor = "#FFFFFF";
  let borderColor = "#FFFFFF";

  switch (status) {
    case "fail": {
      bgColor = "#FEF2F2";
      txtColor = StatusTextColor.fail;
      borderColor = "#FECACA";
      break;
    }
    case "critical": {
      bgColor = "#FEF2F2";
      txtColor = StatusTextColor.critical;
      borderColor = "#FECACA";
      break;
    }
    case "high": {
      bgColor = "#FFF7ED";
      txtColor = StatusTextColor.high;
      borderColor = "#FDBA74";
      break;
    }
    case "medium": {
      bgColor = "#FEFCE8";
      txtColor = StatusTextColor.medium;
      borderColor = "#FEF08A";
      break;
    }
    case "low": {
      bgColor = "#F0FDF4";
      txtColor = StatusTextColor.low;
      borderColor = "#86EFAC";
      break;
    }
    case "noFail": {
      bgColor = "#F0FDF4";
      txtColor = StatusTextColor.noFail;
      borderColor = "#86EFAC";
      break;
    }
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "1 8",
        height: 14,
        backgroundColor: bgColor,
        border: `0.8px solid ${borderColor}`,
        borderRadius: 20,
      }}
    >
      <Text style={{ color: txtColor }}>{txt}</Text>
    </View>
  );
};

const Quixote = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap={true}>
      {/* HEADER */}
      <HeaderReport title="Breach Likelihood Report" />
      {/* CONTENT WRAPPER */}
      <View style={styles.content}>
        <View style={{ height: 15 }}></View>

        <View style={{ margin: "0 0 10 0" }}>
          <View style={styles.gridLayout}>
            <View style={styles.boxLeftStyle}>
              <View style={{ position: "relative" }}>
                <Image
                  src="https://picsum.photos/id/1068/201/54"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    borderBottom: "0.8px solid #EBEAEF",
                    padding: "8 12",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color:
                          data.riskLevel !== 1
                            ? StatusTextColor[
                                RiskLevelText[data.riskLevel].toLowerCase()
                              ]
                            : StatusTextColor.noFail,
                        fontFamily: "Inter",
                        fontSize: 30,
                        fontWeight: 700,
                      }}
                    >
                      {data.riskScore}%
                    </Text>
                  </View>

                  <StatusBadge
                    status={
                      data.riskLevel !== 1
                        ? RiskLevelText[data.riskLevel].toLowerCase()
                        : "noFail"
                    }
                    txt={RiskLevelText[data.riskLevel]}
                  />
                </View>
              </View>
              <View style={{ padding: 12 }}>
                <View style={{ paddingBottom: 12 }}>
                  <Text
                    style={{
                      textAlign: "left",
                      color: colorGray6,
                      fontSize: 8,
                      lineHeight: 1.5,
                    }}
                  >
                    {data.description}
                  </Text>
                </View>
                <View>
                  <View style={styles.boxInfoStyle}>
                    <View style={styles.boxInfoItem}>
                      <Text style={{ color: colorGray6, fontSize:8, fontWeight:500, lineHeight: 1.5 }}>License:</Text>
                      <Text style={{ color: colorGray8, fontSize:8, fontWeight:500, lineHeight: 1.5 }}>{data.license}</Text>
                    </View>
                    <View style={styles.boxInfoItem}>
                      <Text style={{ color: colorGray6, fontSize:8, fontWeight:500, lineHeight: 1.5 }}>Tenant:</Text>
                      <Text style={{ color: colorGray8, fontSize:8, fontWeight:500, lineHeight: 1.5 }}>{data.tenant}</Text>
                    </View>

                    <View style={styles.boxInfoItem}>
                      <Text style={{ color: colorGray6, fontSize:8, fontWeight:500, lineHeight: 1.5 }}>
                        Assessment Date:
                      </Text>
                      <Text style={{ color: colorGray8, fontSize:8, fontWeight:500, lineHeight: 1.5 }}>
                        {data.assessmentDate
                          ? new Date(data.assessmentDate).toLocaleString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              },
                            )
                          : ""}
                      </Text>
                    </View>
                    <View style={styles.boxInfoItem}>
                      <Text style={{ color: colorGray6, fontSize:8, fontWeight:500, lineHeight: 1.5 }}>No. of users:</Text>
                      <Text style={{ color: colorGray8, fontSize:8, fontWeight:500, lineHeight: 1.5 }}>{data.nUser}</Text>
                    </View>
                    <View style={styles.boxInfoItem}>
                      <Text style={{ color: colorGray6, fontSize:8, fontWeight:500, lineHeight: 1.5 }}>Powered By:</Text>
                      <Text style={{ color: colorGray8, fontSize:8, fontWeight:500, lineHeight: 1.5 }}>
                        {data.poweredBy}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.boxRightStyle}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "8 12",
                  backgroundColor: bgColorGray,
                  borderBottom: "0.8px solid #EBEAEF",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 600,
                    fontSize: 10,
                    lineHeigh: 1.6,
                    color: colorGray8,
                  }}
                >
                  Engine Summary
                </Text>
              </View>

              {/* Table */}
              <View style={tableStyles.table}>
                {/* Header */}
                <View style={tableStyles.tableRow}>
                  <Text style={tableStyles.firstCol}> </Text>
                  <Text style={[tableStyles.tableHeaderCell, tableStyles.col]}>
                    Critical/Fail
                  </Text>
                  <Text style={[tableStyles.tableHeaderCell, tableStyles.col]}>
                    High
                  </Text>
                  <Text style={[tableStyles.tableHeaderCell, tableStyles.col]}>
                    Medium
                  </Text>
                  <Text style={[tableStyles.tableHeaderCell, tableStyles.col]}>
                    Low/Pass
                  </Text>
                </View>
                {data.details &&
                  data.details.map((row, idx) => (
                    <View
                      key={`${row.name}-${idx}`}
                      style={tableStyles.tableRow}
                    >
                      <Text style={tableStyles.firstCol}>{row.name}</Text>
                      <Text style={tableStyles.col}>{row.nFail}</Text>
                      <Text style={tableStyles.col}>{row.nHigh}</Text>
                      <Text style={tableStyles.col}>{row.nMedium}</Text>
                      <Text style={tableStyles.col}>{row.nPass}</Text>
                    </View>
                  ))}
              </View>
              {/* End Table */}
            </View>
          </View>
        </View>
        {/*Score trend chart*/}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            border: "0.8px solid #EBEAEF",
            borderRadius: 4,
            marginTop: 12,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              padding: "8 12",
              backgroundColor: "#F7F8FA",
              borderBottom: "0.8px solid #EBEAEF",
              width: "100%",
            }}
          >
            <Text>Score Trend - Last Week</Text>
          </View>
          <View style={{ width: "100%", minHeight: 130 }}></View>
        </View>

        <View style={{ paddingBottom: 7 }}>
          <Text
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: 10,
              lineHeight: "160%",
            }}
          >
            Summary of Each Engine
          </Text>
        </View>
        {/*Detail list*/}
        <View>
          <View>
            {data.details &&
              data.details.map((item, index) => (
                <View
                  style={[
                    detailStyles.categoryListItem,
                    { marginBottom: 5, marginTop: 5 },
                  ]}
                  key={`${item.name}-${index}`}
                  wrap={false}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        width: "80%",
                        padding: 12,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          gap: "8px",
                          alignItems: "center",
                        }}
                      >
                        <View style={{ marginRight: 8 }}>
                          <Text
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 600,
                              fontSize: 10,
                              lineHeight: "160%",
                              color: colorGray8,
                            }}
                          >
                            {item.name}
                          </Text>
                        </View>
                        <StatusBadge status="fail" txt="1/8 Failed" />
                      </View>
                      <View>
                        <View>
                          <Text
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 500,
                              fontSize: 8,
                              lineHeight: 1.5,
                              color: "#ADADB6",
                            }}
                          >
                            ISSUE
                          </Text>
                        </View>
                        <View>
                          {typeof item.description === "string" && (
                            <Text
                              style={{
                                fontFamily: "Inter",
                                fontWeight: 400,
                                fontSize: 8,
                                lineHeight: 1.5,
                                color: colorGray8,
                              }}
                            >
                              {item.description ? item.description : "-"}
                            </Text>
                          )}
                        </View>
                      </View>

                      <View
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <View>
                          <Text
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 500,
                              fontSize: 8,
                              lineHeight: 1.5,
                              color: "#ADADB6",
                            }}
                          >
                            RECOMMENDATION
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 400,
                              fontSize: 8,
                              lineHeight: 1.5,
                              color: colorGray8,
                            }}
                          >
                            {item.remediation ? item.remediation : "-"}
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        width: "20%",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "#F9F8F7",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "8 12",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                          width: "calc(100% - 24)",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 500,
                              fontSize: 8,
                              lineHeight: 1.5,
                              color: colorGray6,
                            }}
                          >
                            Critical
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 600,
                              fontSize: 8,
                              lineHeight: 1.5,
                              color: colorGray8,
                            }}
                          >
                            {item.nFail}
                          </Text>
                        </View>

                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 500,
                              fontSize: 8,
                              lineHeight: 1.5,
                              color: colorGray6,
                            }}
                          >
                            High
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 600,
                              fontSize: 8,
                              lineHeight: 1.5,
                              color: colorGray8,
                            }}
                          >
                            {item.nHigh}
                          </Text>
                        </View>

                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 500,
                              fontSize: 8,
                              lineHeight: 1.5,
                              color: colorGray6,
                            }}
                          >
                            Medium
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 600,
                              fontSize: 8,
                              lineHeight: 1.5,
                              color: colorGray8,
                            }}
                          >
                            {item.nMedium}
                          </Text>
                        </View>

                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 500,
                              fontSize: 8,
                              lineHeight: 1.5,
                              color: colorGray6,
                            }}
                          >
                            Low
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 600,
                              fontSize: 8,
                              lineHeight: 1.5,
                              color: colorGray8,
                            }}
                          >
                            {item.nPass}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </View>
        {/*End detail list*/}
      </View>
      {/* FOOTER */}
      <FooterReport />
    </Page>
    <Page size="A4" style={styles.page} wrap={true}>
      {/* HEADER */}
      <HeaderReport title="Appendix A: Top 5 Records per Engine" />
      {/*Evidence list*/}
      <View>
        <View>
          {data.details &&
            data.details.map((item, index) => (
              <View
                key={`evidence-${item.name}-${index}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  border: "0.8px solid #EBEAEF",
                  borderRadius: 4,
                  marginTop: 12,
                }}
                wrap={false}
              >
                <View
                  style={{
                    display: "flex",
                    padding: "8 12",
                    backgroundColor: "#F7F8FA",
                    borderBottom: "0.8px solid #EBEAEF",
                    width: "100%",
                  }}
                >
                  <Text>{item.name}</Text>
                </View>
                <View
                  style={{ width: "100%", padding: 12, whiteSpace: "pre-wrap" }}
                >
                  <Text>{item.evidence || ""}</Text>
                </View>
              </View>
            ))}
        </View>
      </View>
      {/*End evidence list*/}

      {/* FOOTER */}
      <FooterReport />
    </Page>
  </Document>
);

ReactPDF.render(<Quixote />);
